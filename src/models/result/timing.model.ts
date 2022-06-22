export class TimingModel {
    public constructor(
        public readonly notifyOverhead: number,
        public readonly wakeupOverhead: number,
        public readonly sleepOverhead: number,
        public readonly nowOverhead: number,
        public readonly lockOverhead: number,
        public readonly loopOverhead: number,
        public readonly joinOverhead: number,
        public readonly targetTime: number
    ) {
    }
}
