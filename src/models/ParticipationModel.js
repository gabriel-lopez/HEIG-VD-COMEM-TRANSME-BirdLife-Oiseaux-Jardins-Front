import { UserModel } from './UserModel'
import { UserPlaceModel } from './UserPlaceModel'
import { PlaceModel } from './PlaceModel'
import { NewsletterModel } from './NewsletterModel'

export class ParticipationModel {
  constructor () {
    this.date = ''
    this.time = ''
    this.user = new UserModel()
    this.userPlace = new UserPlaceModel()
    this.place = new PlaceModel()
    this.newsletter = new NewsletterModel()
  }
}
