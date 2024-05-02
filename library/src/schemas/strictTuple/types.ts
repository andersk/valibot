import type { BaseIssue } from '../../types/index.ts';

/**
 * Strict tuple issue type.
 */
export interface StrictTupleIssue extends BaseIssue<unknown> {
  /**
   * The issue kind.
   */
  readonly kind: 'schema';
  /**
   * The issue type.
   */
  readonly type: 'strict_tuple';
  /**
   * The expected input.
   */
  readonly expected: 'Array' | 'never';
}
