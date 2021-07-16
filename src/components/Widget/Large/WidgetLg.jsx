import "./WidgetLg.css"

const dataTitle = [
    {
        row_title: "Customer",
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
                avt: "https://i.pravatar.cc/300",

                name: "Họ và tên"
            },
        ],
        date: "4 July 2021",
        amount: "$125.25",
        typeButton: "Done"
    },
    {
        user: [
            {
                avt: "https://i.pravatar.cc/300",

                name: "Họ và tên"
            },
        ],
        date: "4 July 2021",
        amount: "$125.25",
        typeButton: "Done"
    },
    {
        user: [
            {
                avt: "https://i.pravatar.cc/300",

                name: "Họ và tên"
            },
        ],
        date: "4 July 2021",
        amount: "$125.25",
        typeButton: "Pending"
    },
    {
        user: [
            {
                avt: "https://i.pravatar.cc/300",

                name: "Họ và tên",
            },
        ],
        date: "4 July 2021",
        amount: "$125.25",
        typeButton: "Declined"
    },




]

const Button = ({ type }) => {
    return (
        <button className={"WidgetLgButton " + type}>{type}</button>
    )
};


export default function WidgetLg(props) {
    return (
        <div className="WidgetLg ">
            <div className="WidgetLgTitle">{props.title}</div>

            <table className="WidgetLgTable">
                <thead>
                    <tr className="WidgetLgTr" >
                        {
                            dataTitle.map((value, key) => (
                                <th className="WidgetLgTh" key={key}>
                                    {value.row_title}
                                </th >
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((value, key) => {
                            return (
                                <tr className="WidgetLgTr" key={key}>
                                    <th className="WidgetLgUser" >
                                        <img src={value.user[0].avt} alt="" className="WidgetLgAvt" />
                                        <span className="WidgetLgUserName">{value.user[0].name}</span>
                                    </th>
                                    <th className="WidgetLgDate">{value.date}</th>
                                    <th className="WidgetLgAmount">{value.amount}</th>
                                    <th className="WidgetLgStatus">
                                        <Button type={value.typeButton} />
                                    </th>
                                </tr>
                            )

                        })

                    }

                </tbody>

            </table >
            {/* 
            <table className="WidgetLgTable">
                <tr className="WidgetLgTr">
                    <th className="WidgetLgTh">Customer</th>
                    <th className="WidgetLgTh">Date</th>
                    <th className="WidgetLgTh">Amount</th>
                    <th className="WidgetLgTh">Status</th>
                </tr>
                <tr className="WidgetLgTr">
                    <th className="WidgetLgUser">
                        <img src="https://i.pravatar.cc/300" alt="" className="WidgetLgAvt" />
                        <span className="WidgetLgUserName">Hot Girl</span>
                    </th>
                    <th className="WidgetLgDate">4 July 2021</th>
                    <th className="WidgetLgAmount">$125.25</th>
                    <th className="WidgetLgStatus">
                        <Button type="Done" />
                    </th>
                </tr>
                <tr className="WidgetLgTr">
                    <th className="WidgetLgUser">
                        <img src="https://i.pravatar.cc/300" alt="" className="WidgetLgAvt" />
                        <span className="WidgetLgUserName">Hot Girl</span>
                    </th>
                    <th className="WidgetLgDate">4 July 2021</th>
                    <th className="WidgetLgAmount">$125.25</th>
                    <th className="WidgetLgStatus">
                        <Button type="Done" />
                    </th>
                </tr>
                <tr className="WidgetLgTr">
                    <th className="WidgetLgUser">
                        <img src="https://i.pravatar.cc/300" alt="" className="WidgetLgAvt" />
                        <span className="WidgetLgUserName">Hot Girl</span>
                    </th>
                    <th className="WidgetLgDate">4 July 2021</th>
                    <th className="WidgetLgAmount">$125.25</th>
                    <th className="WidgetLgStatus">
                        <Button type="Pending" />
                    </th>
                </tr>
                <tr className="WidgetLgTr">
                    <th className="WidgetLgUser">
                        <img src="https://i.pravatar.cc/300" alt="" className="WidgetLgAvt" />
                        <span className="WidgetLgUserName">Hot Girl</span>
                    </th>
                    <th className="WidgetLgDate">4 July 2021</th>
                    <th className="WidgetLgAmount">$125.25</th>
                    <th className="WidgetLgStatus">
                        <Button type="Declined" />
                    </th>
                </tr>
            </table> */}
        </div >
    )
}
