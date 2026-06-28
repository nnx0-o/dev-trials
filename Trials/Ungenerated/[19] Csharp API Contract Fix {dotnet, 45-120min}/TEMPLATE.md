# TEMPLATE - [19] Csharp API Contract Fix {dotnet, 45-120min}

## 1) Trial Identity
- Project: Csharp API Contract Fix
- Stack label: dotnet
- Suggested effort: 45-120min
- Request style seed: User-facing issue report with conflicting stakeholder expectations

## 2) Trial Intent
This trial should feel like being dropped into a real project with limited context.
The goal is adaptation: read, infer, decide, and execute in imperfect conditions.

## 3) Request Framing
Design the starting request so it resembles real incoming work:
- It can be direct, ambiguous, contradictory, or mixed.
- It can blend feature work, bug symptoms, cleanup pressure, and stakeholder urgency.
- It does not need to cleanly label the exact problem upfront.

Example framing direction for this trial:
- User-facing issue report with conflicting stakeholder expectations

## 4) Environment Shape
Build this trial as a human-like codebase, not a polished generated sample.
Use realistic friction such as:
- Configuration and runtime defaults do not fully match
- uneven file organization
- practical shortcuts and legacy leftovers
- occasional non-obvious behavior

## 5) Scale And Challenge Rules
- Issue complexity and codebase size are independent.
- Small codebase can still require deep reasoning and longer effort.
- Larger codebase can still contain quick, surgical issues.
- Keep variety across the whole set; do not normalize all trials to one pattern.

## 6) Priority Skill Focus
This trial should primarily exercise:
- identifying hidden assumptions and documenting them

Secondary skill options:
- communication through commit-quality notes
- controlled refactoring in messy environments
- reading and validating unknown assumptions

## 7) Control Files (Non-Project)
The trial must include and maintain these control files:

1. TODO.md
- Contains request/problem framing and task direction.
- Can be sparse or detailed depending on intended ambiguity.

2. REQUIREMENTS.md
- Used to evaluate completion after work is believed done.
- Must include objective checks and open-ended quality checks.
- Must include explicit ready/not-ready criteria.

3. PROGRESS.md
- Must exist and be empty at creation time.
- Reserved for user-entered progress notes only.

## 8) Project Files Guidance
- Source files should resemble real project artifacts.
- README.md is common but optional for very small trials.
- Tests are optional and should exist only when natural for this project.
- Avoid mechanically tidy output everywhere; realistic messiness is part of the challenge.

## 9) Resource Referencing Rules
- Shared placeholders may be referenced from resources/GENERIC_MEDIA_RESOURCES.md when useful.
- If resources are generated during implementation, keep them local to this trial folder.
- Generated resources must not leave this trial folder.
- Do not cross-reference trial-specific generated assets from other trials.

## 10) Generation Acceptance Signals
A generated trial is acceptable when:
- The scenario feels believable as real work.
- The issue is solvable with available files/context.
- The intended ambiguity/friction is present but not nonsense.
- TODO.md and REQUIREMENTS.md align with the scenario.
- PROGRESS.md exists and is empty.

## 11) Notes For Generator
- Prefer plausible human decisions over symmetrical template perfection.
- Preserve practical inconsistency where it teaches useful navigation skills.
- Do not over-explain everything inside the codebase.