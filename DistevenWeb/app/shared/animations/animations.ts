import { animate, keyframes, state, style, transition, trigger } from "@angular/animations";

export const enterLeaveAnimation = trigger(
    'enterLeaveAnimation', [
    transition(':enter', [
        style({ transform: 'translateY(2.5%)', opacity: 0, transition: 'all ease 300ms' }),
        animate('170ms', style({ transform: 'translateY(0)', opacity: 1 }))
    ]),
    transition(':leave', [
        style({ transform: 'translateY(0)', opacity: 1, transition: 'all ease 300ms' }),
        animate('170ms', style({ transform: 'translateY(2.5%)', opacity: 0 }))
    ])
]);


export const enterLeaveAnimation20 = trigger(
    'enterLeaveAnimation20', [
    transition(':enter', [
        style({ transform: 'translateY(-20%)', opacity: 0, transition: 'all ease 300ms' }),
        animate('170ms', style({ transform: 'translateY(0)', opacity: 1 }))
    ]),
    transition(':leave', [
        style({ transform: 'translateY(0)', opacity: 1, transition: 'all ease 300ms' }),
        animate('170ms', style({ transform: 'translateY(-20%)', opacity: 0 }))
    ])
])

export const enterAnimation = trigger(
    'enterAnimation', [
    transition(':enter', [
        style({ transform: 'translateY(-20%)', opacity: 0 }),
        animate('170ms', style({ transform: 'translateY(0)', opacity: 1 }))
    ])
])

export const leaveAnimation = trigger(
    'leaveAnimation', [
    transition(':leave', [
        style({ transform: 'translateY(-0%)', opacity: 0 }),
        animate('170ms', style({ transform: 'translateY(-20%)', opacity: 1 }))
    ])
])

export const appearAnimation = trigger(
    'appearAnimation', [
    transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
    ])
])

export const slideLeftRightAnimation = trigger(
    'slideLeftRightAnimation', [
        state('left', style({ transform: 'translateX(0)' })),
        state('right', style({ transform: 'translateX(100%)' })),
        transition('left => right', animate('300ms ease-in')),
        transition('right => left', animate('300ms ease-out')),
])

export const flyInOut = trigger('flyInOut', [
    state('inactive', style({
        display: 'none',
        opacity: 0,
    })),
    transition('inactive => active', animate('300ms ease-out', keyframes([
        style({
            opacity: 0,
            bottom: '-15px',
            'max-height': 0,
            'max-width': 0,
            'margin-top': 0,
        }),
        style({
            opacity: 0.8,
            bottom: '-3px',
        }),
        style({
            opacity: 1,
            bottom: '0',
            'max-height': '200px',
            'margin-top': '12px',
            'max-width': '400px',
        }),
    ]))),
    state('active', style({
        bottom: '0',
        'max-height': '200px',
        'margin-top': '12px',
        'max-width': '400px',
    })),
    transition('active => removed', animate('300ms ease-out', keyframes([
        style({
            opacity: 0.6,
            bottom: 0,
        }),
        style({
            opacity: 0.1,
            bottom: '-3px',
        }),
        style({
            opacity: 0,
            bottom: '-15px',
        }),
    ]))),
]);