"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DateUtils_1 = require("./DateUtils");
const PrayerTimes_1 = __importDefault(require("./PrayerTimes"));
class SunnahTimes {
    constructor(prayerTimes) {
        const date = prayerTimes.date;
        const nextDay = (0, DateUtils_1.dateByAddingDays)(date, 1);
        const nextDayPrayerTimes = new PrayerTimes_1.default(prayerTimes.coordinates, nextDay, prayerTimes.calculationParameters);
        const nightDuration = (nextDayPrayerTimes.fajr.getTime() - prayerTimes.maghrib.getTime()) /
            1000.0;
        this.middleOfTheNight = (0, DateUtils_1.roundedMinute)((0, DateUtils_1.dateByAddingSeconds)(prayerTimes.maghrib, nightDuration / 2));
        this.lastThirdOfTheNight = (0, DateUtils_1.roundedMinute)((0, DateUtils_1.dateByAddingSeconds)(prayerTimes.maghrib, nightDuration * (2 / 3)));
    }
}
exports.default = SunnahTimes;
