class UberPrice {
  constructor(distance, duration, baseFare, costPerMile, costPerMinute) {
    this.distance = distance;
    this.duration = duration;
    this.baseFare = baseFare;
    this.costPerMile = costPerMile;
    this.costPerMinute = costPerMinute;
  }

  totalPrice() {
    return (
      this.baseFare +
      this.distance * this.costPerMile +
      this.duration * this.costPerMinute
    );
  }
}

const myUber = new UberPrice(29, 23, 77, 92, 31, 56);
console.log("Uber Price is = ", myUber.totalPrice());
