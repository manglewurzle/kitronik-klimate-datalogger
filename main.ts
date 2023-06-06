datalogger.onLogFull(function () {
    basic.showString("log full")
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(100)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    datalogger.deleteLog()
})
datalogger.setColumnTitles(
"Date",
"Time",
"Temperature",
"Pressure",
"Humidity"
)
datalogger.includeTimestamp(FlashLogTimeStampFormat.None)
basic.forever(function () {
	
})
loops.everyInterval(3600000, function () {
    datalogger.log(
    datalogger.createCV("Date", kitronik_RTC.readDate()),
    datalogger.createCV("Time", kitronik_RTC.readTime()),
    datalogger.createCV("Temperature", Kitronik_klimate.temperature(Kitronik_klimate.TemperatureUnitList.C)),
    datalogger.createCV("Pressure", Kitronik_klimate.pressure(Kitronik_klimate.PressureUnitList.mBar)),
    datalogger.createCV("Humidity", Kitronik_klimate.humidity())
    )
})
