let dictionary: Record<string, TrackStates> = {};

interface TrackStates {
    current: string;
    next: string;
}

const item: Record<keyof TrackStates, string> = {
    current: 'fr23dsdc',
    next: 'dffdr34t',
};

// Numbers are coerced to String
dictionary[0] = item;