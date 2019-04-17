export class BirdModel {
  constructor (bird) {
    this.id = bird.id
    this.name_de = bird.name_de
    this.name_fr = bird.name_fr
    this.name_it = bird.name_it

    this.picture = null
    if (bird.pictures != null) {
      this.picture = bird.pictures[0].filename
    }

    this.counter = 1
  }
}
