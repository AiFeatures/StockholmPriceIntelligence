# Fork Customizations

> Upstream: [OrhanUlusoy/StockholmPriceIntelligence](https://github.com/OrhanUlusoy/StockholmPriceIntelligence)
> Fork maintained by: @ashsolei
> Last reviewed: 2026-04-08
> Fork type: **light-customization**
> Sync cadence: **quarterly**

## Purpose of Fork

Stockholm real-estate price intelligence fork with iAiFy analytics overlays.

## Upstream Source

| Property | Value |
|---|---|
| Upstream | [OrhanUlusoy/StockholmPriceIntelligence](https://github.com/OrhanUlusoy/StockholmPriceIntelligence) |
| Fork org | AiFeatures |
| Fork type | light-customization |
| Sync cadence | quarterly |
| Owner | @ashsolei |

## Carried Patches

Local commits ahead of `upstream/main` at last review:

- `ef80733 chore(deps): bump minimatch in /frontend (#1)`
- `4853103 chore(deps): bump next from 16.1.6 to 16.1.7 in /frontend (#2)`
- `8ca261d chore(deps-dev): bump flatted from 3.3.3 to 3.4.2 in /frontend (#3)`
- `21e33a7 chore(deps): bump picomatch in /frontend (#4)`
- `2eb11ba chore(deps): bump pygments from 2.19.2 to 2.20.0 in /backend (#5)`
- `6a2b52e chore: add MIT LICENSE (#7)`
- `0f84afa chore: sync CLAUDE.md and copilot-instructions docs`
- `07e2e77 ci: add github-actions ecosystem to dependabot`
- `71378db docs: update FORK-CUSTOMIZATIONS.md with upstream source`
- `a517c77 docs: add FORK-CUSTOMIZATIONS.md per enterprise fork governance`
- `aebd8ab ci: add copilot-setup-steps.yml for Copilot Workspace`
- `de13260 chore: add AGENTS.md`
- `bef9583 chore: add CLAUDE.md`
- `5c978fc chore: add copilot-instructions.md`
- `d52ade3 chore: add Copilot Coding Agent setup steps`
- `528a1be chore: remove misplaced agent files from .github/copilot/agents/`
- `a28a442 chore: deploy core custom agents from AgentHub`
- `b03234d chore: deploy core Copilot agents from AgentHub`
- `b40f2a7 docs: add FORK-CUSTOMIZATIONS.md`
- `f57ad31 chore: add dependabot.yml [governance-orchestrator]`
- `fe5d6d0 chore: add CODEOWNERS [governance-orchestrator]`
- `50b30d7 chore: remove workflow deploy.yml — enterprise cleanup`
- `0743762 chore: remove workflow ci.yml — enterprise cleanup`

## Supported Components

- Root governance files (`.github/`, `CLAUDE.md`, `AGENTS.md`, `FORK-CUSTOMIZATIONS.md`)
- Enterprise CI/CD workflows imported from `Ai-road-4-You/enterprise-ci-cd`

## Out of Support

- All upstream source directories are tracked as upstream-of-record; local edits to core source are discouraged.

## Breaking-Change Policy

1. On upstream sync, classify per `governance/docs/fork-governance.md`.
2. Breaking API/license/security changes auto-classify as `manual-review-required`.
3. Owner triages within 5 business days; conflicts are logged to the `fork-sync-failure` issue label.
4. Revert local customizations only after stakeholder sign-off.

## Sync Strategy

This fork follows the [Fork Governance Policy](https://github.com/Ai-road-4-You/governance/blob/main/docs/fork-governance.md)
and the [Fork Upstream Merge Runbook](https://github.com/Ai-road-4-You/governance/blob/main/docs/runbooks/fork-upstream-merge.md).

- **Sync frequency**: quarterly
- **Conflict resolution**: Prefer upstream; reapply iAiFy customizations on a sync branch
- **Automation**: [`Ai-road-4-You/fork-sync`](https://github.com/Ai-road-4-You/fork-sync) workflows
- **Failure handling**: Sync failures create issues tagged `fork-sync-failure`

## Decision: Continue, Rebase, Refresh, or Replace

| Option | Current Assessment |
|---|---|
| Continue maintaining fork | yes - governance overlay only |
| Full rebase onto upstream | feasible on request |
| Fresh fork (discard local changes) | acceptable |
| Replace with upstream directly | possible |

## Maintenance

- **Owner**: @ashsolei
- **Last reviewed**: 2026-04-08
- **Reference runbook**: `ai-road-4-you/governance/docs/runbooks/fork-upstream-merge.md`
