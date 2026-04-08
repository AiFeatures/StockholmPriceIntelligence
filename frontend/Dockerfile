# Multi-stage Dockerfile for StockholmPriceIntelligence frontend (Next.js 16)
# Produces a minimal standalone-mode runtime image.

# -----------------------------------------------------------------------------
# Stage 1 — deps: install node_modules using package-lock.json
# -----------------------------------------------------------------------------
FROM node:22.11.0-alpine3.20 AS deps
WORKDIR /app

# libc6-compat is needed by some native Next.js addons on alpine
RUN apk add --no-cache libc6-compat

COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund


# -----------------------------------------------------------------------------
# Stage 2 — builder: produce the standalone Next.js bundle
# -----------------------------------------------------------------------------
FROM node:22.11.0-alpine3.20 AS builder
WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build


# -----------------------------------------------------------------------------
# Stage 3 — runner: tiny runtime image
# -----------------------------------------------------------------------------
FROM node:22.11.0-alpine3.20 AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Create a non-root user for the runtime
RUN addgroup --system --gid 1001 nodejs \
 && adduser --system --uid 1001 --ingroup nodejs nextjs

# Copy the standalone server + static + public assets with correct ownership
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD wget -qO- http://localhost:3000/ >/dev/null 2>&1 || exit 1

CMD ["node", "server.js"]
