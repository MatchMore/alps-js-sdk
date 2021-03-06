/**
 * A proximity event is triggered to the core when a mobile device detects an iBeacon device in his Bluetooth Low Energy(BLE) range.
 */
export interface ProximityEvent {
    /**
     * The id (UUID) of the proximity event.
     */
    id?: string;
    /**
     * The timestamp of the proximity event in seconds since Jan 01 1970 (UTC).
     */
    createdAt?: number;
    /**
     * The id (UUID) of the iBeacon to trigger a proximity event to.
     */
    deviceId: string;
    /**
     * Distance between the mobile device that trigger the proximity event and the ranged iBeacon. This distance is automatically generated by the SDK based upon the CLProximity.
     */
    distance: number;
}
