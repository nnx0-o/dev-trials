# Generic Product-Like Placeholder Resource Pack

Purpose: this shared pack provides lightweight assets that look like real product resources and make features run end-to-end without full production media.

Core intent:
- These files should appear believable in app flows, demos, and UI previews.
- These files should remain intentionally lightweight so they are easy to store and fast to load.
- They are placeholders, but they should not look obviously fake from naming alone.

## Suggested Files to Add (22)

### Images (10)
1. media/images/logo-16x16.png: Tiny app logo used by favicons, toolbar badges, and compact UI slots where a missing icon would otherwise break visual layout.
2. media/images/logo-64x64.png: Standard square brand mark for profile chips, launcher cards, and startup placeholders that expect a medium-sized logo file.
3. media/images/product-hero-1280x720.jpg: Wide hero image fallback for landing sections, onboarding screens, or dashboards that render a large promotional banner.
4. media/images/empty-state-illustration.png: Neutral empty-state graphic for no-data screens so views remain structured and user-friendly before real artwork exists.
5. media/images/avatar-default-128.png: Generic user avatar for comments, audit trails, and account views when no profile photo is uploaded.
6. media/images/thumbnail-default-320x180.jpg: Video or content card thumbnail fallback that preserves 16:9 card alignment in feeds and galleries.
7. media/images/sprite-ui-controls.png: Compact sprite sheet for quick prototyping of buttons, toggles, and icon states in game-like or legacy UI renderers.
8. media/images/background-pattern-light.png: Subtle background texture used to avoid blank surfaces in marketing pages and panel containers.
9. media/images/background-pattern-dark.png: Dark variant of the same background concept for contrast testing and dark-theme compatibility checks.
10. media/images/icons-core.svg: Multi-symbol SVG sheet containing common product icons so loaders and icon pipelines have a valid vector source.

### Video (6)
11. media/video/onboarding-loop-720p.mp4: Short loop clip for onboarding or splash areas to verify autoplay behavior, buffering state, and media fallback logic.
12. media/video/feature-demo-short.mp4: Brief feature walkthrough sample that can sit in help panels or product tour modals without requiring a real recording session.
13. media/video/error-recovery-flow.mp4: Small clip representing a recovery interaction used to test modal playback, seek controls, and replay handling.
14. media/video/background-motion-muted.mp4: Muted ambient motion video intended for hero headers where autoplay policies and silent playback must be validated.
15. media/video/intro-stinger-1s.webm: Alternate codec micro-clip to ensure codec fallback paths are tested on browsers that prefer WebM sources.
16. media/video/loading-placeholder-pattern.mp4: Visual test-pattern clip used in QA to quickly confirm that video surfaces render at the correct aspect ratio.

### Audio (6)
17. media/audio/ui-click-primary.wav: Primary click cue used for button feedback paths and interaction confirmation events.
18. media/audio/ui-success-chime.wav: Positive completion sound for saved states, successful actions, and confirmation banners.
19. media/audio/ui-error-buzz.wav: Negative feedback tone for failed submissions, validation errors, or blocked workflows.
20. media/audio/notification-soft.mp3: Lightweight notification tone for inbox, task update, or reminder events without harsh interruption.
21. media/audio/ambient-dashboard-loop.mp3: Low-intensity loop for demo environments where continuous audio playback logic needs to be exercised.
22. media/audio/voice-note-sample.m4a: Short voice sample for transcription hooks, media attachment workflows, and waveform rendering tests.

## Minimum Quality Requirements
- Every file should be valid for its extension, not just renamed plain text.
- Keep assets intentionally small to avoid slowing down repository operations.
- Use deterministic content when possible so visual and parser tests stay repeatable.

## Optional Folder Layout
- resources/media/images/
- resources/media/video/
- resources/media/audio/