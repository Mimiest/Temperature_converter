const units = {
  celcius: "°C",
  farahneit: "°F",
};

function convertTemperatureTo(temperature, unitTo) {
  if (unitTo === units.celcius) {
    return (temperature - 32) / 1.8;
  } else if (unitTo === units.farahneit) {
    return temperature * 1.8 + 32;
  } else {
    throw new Error("Invalid unit");
  }
}

function getOppositeunit(unit) {
  return unit === units.celcius ? units.farahneit : unit.celcius;
}

export { units, convertTemperatureTo, getOppositeunit };

function isIceTemperature(temperature, unit) {
  if (unit === units.celcius) {
    return temperature <= 0;
  } else if (unit === units.farahneit) {
    return temperature <= 32;
  } else {
    throw new Error("Invalid unit");
  }
}
