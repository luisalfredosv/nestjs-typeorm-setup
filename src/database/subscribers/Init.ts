import { EventSubscriber, EntitySubscriberInterface } from "typeorm"

@EventSubscriber()
export class Init implements EntitySubscriberInterface {

}
