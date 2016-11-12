/**
 * Created by piotrandrzejewski on 11/11/2016.
 */
export default {
    all: (events) => true,
    sport: (events) => events.type === 'sport',
    praca: (events) => events.type === 'praca',
    rozrywka: (events) => events.type === 'rozrywka',
    niunie: (events) => events.type=== 'niunie'

}