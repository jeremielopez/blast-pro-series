import {
  trigger,
  animate,
  style,
  group,
  query,
  transition
} from '@angular/animations';

export const routerTransition = trigger('routeAnimations', [
  transition('* <=> *', [
    /* order */
    /* 1 */ query(
      ':enter, :leave',
      style({ position: 'absolute', width: '100%' }),
      { optional: true }
    ),
    /* 2 */ group([
      // block executes in parallel
      query(
        ':enter',
        [
          style({ opacity: '0', transform: 'scale(0.8)' }),
          animate('0.5s ease-in-out', style({ opacity: '1', transform: 'scale(1)' })),
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [
          style({ opacity: '1', transform: 'scale(1)' }),
          animate('0.5s ease-in-out', style({ opacity: '0', transform: 'scale(0.8)' })),
        ],
        { optional: true }
      )
    ])
  ])
]);
