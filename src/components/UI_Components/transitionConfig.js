// Shared timing for the page-load curtain. PageCurtain runs for CURTAIN_DURATION
// and the tiles are fully covering the screen between COVER_START and COVER_END.
// The routed page should fade in just after the curtain starts lifting (LIFT_POINT)
// so the new content is revealed as the curtain rises, not before.

export const CURTAIN_DURATION = 2.1   // seconds, full open -> close cycle
export const COVER_START = 0.14       // fraction of duration at which tiles are fully covering
export const COVER_HOLD = 0.55        // fraction of duration the curtain stays fully covering
export const LIFT_POINT = COVER_HOLD  // alias: when the page underneath should be visible

// Easing shared by every tile so the curtain moves as one mesh.
export const CURTAIN_EASE = [0.22, 1, 0.36, 1]
