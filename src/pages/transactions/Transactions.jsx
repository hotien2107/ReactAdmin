import "./Transactions.css"

const dataTitle = [
    {
        row_title: "Customer",
    },
    {
        row_title: "Staff",
    },
    {
        row_title: "Transaction's name",
    },
    {
        row_title: "Date",
    },
    {
        row_title: "Amount",
    },
    {
        row_title: "Status",
    }
]
const data = [
    {
        user: [
            {
                avt: "https://gamek.mediacdn.vn/133514250583805952/2020/9/10/photo-1-1599710664903922515450.jpg",

                name: "Họ và tên"
            },
        ],
        staff: "Tên nhân viên",
        tranName: "Tên công việc",
        date: "4 July 2021",
        amount: "$125.25",
        typeButton: "Done"
    },
    {
        user: [
            {
                avt: "https://gamek.mediacdn.vn/133514250583805952/2020/9/10/photo-1-1599710664903922515450.jpg",

                name: "Họ và tên"
            },
        ],
        staff: "Tên nhân viên",
        tranName: "Tên công việc",
        date: "4 July 2021",
        amount: "$125.25",
        typeButton: "Done"
    },
    {
        user: [
            {
                avt: "https://gamek.mediacdn.vn/133514250583805952/2020/9/10/photo-1-1599710664903922515450.jpg",

                name: "Họ và tên"
            },
        ],
        staff: "Tên nhân viên",
        tranName: "Tên công việc",
        date: "4 July 2021",
        amount: "$125.25",
        typeButton: "Done"
    },
    {
        user: [
            {
                avt: "https://gamek.mediacdn.vn/133514250583805952/2020/9/10/photo-1-1599710664903922515450.jpg",

                name: "Họ và tên"
            },
        ],
        staff: "Tên nhân viên",
        tranName: "Tên công việc",
        date: "4 July 2021",
        amount: "$125.25",
        typeButton: "Done"
    },
    {
        user: [
            {
                avt: "https://gamek.mediacdn.vn/133514250583805952/2020/9/10/photo-1-1599710664903922515450.jpg",

                name: "Họ và tên"
            },
        ],
        staff: "Tên nhân viên",
        tranName: "Tên công việc",
        date: "4 July 2021",
        amount: "$125.25",
        typeButton: "Pending"
    },
    {
        user: [
            {
                avt: "https://gamek.mediacdn.vn/133514250583805952/2020/9/10/photo-1-1599710664903922515450.jpg",

                name: "Họ và tên"
            },
        ],
        staff: "Tên nhân viên",
        tranName: "Tên công việc",
        date: "4 July 2021",
        amount: "$125.25",
        typeButton: "Declined"
    },
    

]

const Button = ({ type }) => {
    return (
        <button className={"TransactionsButton " + type}>{type}</button>
    )
};


export default function Transactions(props) {
    return (
        <div className="Transactions ">
            <div className="TransactionsTitle">Transactions</div>

            <table className="TransactionsTable">

                <tr className="TransactionsTr" >
                    {
                        dataTitle.map((value, key) => (
                            <th className="TransactionsTh" key={key}>
                                {value.row_title}
                            </th >
                        ))
                    }
                </tr>

                {
                    data.map((value, key) => {
                        return (
                            <tr className="TransactionsTr" key={key}>
                                <th className="TransactionsUser" >
                                    <img src={value.user[0].avt} alt="" className="TransactionsAvt" />
                                    <span className="TransactionsUserName">{value.user[0].name}</span>
                                </th>
                                <th className="TransactionsThItem">{value.staff}</th>
                                <th className="TransactionsThItem">{value.tranName}</th>
                                <th className="TransactionsThItem">{value.date}</th>
                                <th className="TransactionsThItem">{value.amount}</th>
                                <th className="TransactionsThItem">
                                    <Button type={value.typeButton} />
                                </th>
                            </tr>
                        )

                    })

                }
            </table >
        </div >
    )
}