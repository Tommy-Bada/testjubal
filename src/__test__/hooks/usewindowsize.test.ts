import { act, renderHook } from '@testing-library/react';

/**
 * **************************************************************************
 * **************************************************************************
 * Author:
 *
 * email:
 *
 * filename: usewindowsize.test.tsx
 *
 * @description: This is hook function test to check for the window size of both
 * height and width of a browser
 *
 * ***************************************************************************
 * ***************************************************************************
 * ? Local & Shared Imports
 */

import { useWindowSize } from '@/lib/hooks/useWindowSize';

describe('useWindowSize hook', () => {
  test('it should return the initial window size', () => {
    const { result } = renderHook(() => useWindowSize());

    expect(result.current.windowSize).toEqual({
      width: typeof window !== 'undefined' ? window.innerWidth : 0,
      height: typeof window !== 'undefined' ? window.innerHeight : 0,
    });
  });

  test("updating the window as soon as it's resizing", () => {
    const { result, unmount } = renderHook(() => useWindowSize());

    // Simulation on a window resize event
    window.innerWidth = 1000;
    window.innerHeight = 800;

    act(() => {
      window.dispatchEvent(new Event('resize'));
    });

    expect(result.current.windowSize).toEqual({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    unmount();
  });
});
