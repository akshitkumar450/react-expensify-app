import moment from 'moment'

const expenses = [{
    id: '1',
    des: 'Gum',
    note: '',
    amount: 195,
    //  it is at the unix epooch 1 jan 1970
    createdAt: 0
}, {
    id: '2',
    des: 'Rent',
    note: '',
    amount: 109500,
    //  it is 4 days before  the unix epooch 1 jan 1970
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    des: 'Credit Card',
    note: '',
    amount: 4500,
    //  it is 4 days after  the unix epooch 1 jan 1970
    createdAt: moment(0).add(4, 'days').valueOf()
}];

export default expenses