// Delivery fee in rupees for a parcel of the given weight in kilograms.
// Up to 1 kg: 200; up to 5 kg: 350; up to 20 kg: 800; above 20 kg: 1500.
function fee(weightKg) {
  if (typeof weightKg !== 'number' || weightKg <= 0) {
    throw new RangeError('weight must be a number greater than 0');
  }
  if (weightKg <= 1) return 200;
  if (weightKg < 5) return 350;
  if (weightKg <= 20) return 800;
  return 1500;
}

module.exports = { fee };
