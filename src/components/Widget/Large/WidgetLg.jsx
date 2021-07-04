import "./WidgetLg.css"

const Button = ({type}) => {
    return (
        <button className={"WidgetLgButton " + type}>{type}</button>
        
    )
};
export default function WidgetLg() {
    return (
        <div className="WidgetLg">
            <div className="WidgetLgTitle">Latest transactions</div>

            <table className="WidgetLgTable">
                <tr className="WidgetLgTr">
                    <th className="WidgetLgTh">Customer</th>
                    <th className="WidgetLgTh">Date</th>
                    <th className="WidgetLgTh">Amount</th>
                    <th className="WidgetLgTh">Status</th>
                </tr>
                <tr className="WidgetLgTr">
                    <th className="WidgetLgUser">
                        <img src="https://i.pinimg.com/736x/76/07/5c/76075c11bfe509ee9a11d9baa991c40d.jpg" alt="" className="WidgetLgAvt" />
                        <span className="WidgetLgUserName">Hot Girl</span>
                    </th>
                    <th className="WidgetLgDate">4 July 2021</th>
                    <th className="WidgetLgAmount">$125.25</th>
                    <th className="WidgetLgStatus">
                        <Button type="Done"/>
                    </th>
                </tr>
                <tr className="WidgetLgTr">
                    <th className="WidgetLgUser">
                        <img src="https://i.pinimg.com/736x/76/07/5c/76075c11bfe509ee9a11d9baa991c40d.jpg" alt="" className="WidgetLgAvt" />
                        <span className="WidgetLgUserName">Hot Girl</span>
                    </th>
                    <th className="WidgetLgDate">4 July 2021</th>
                    <th className="WidgetLgAmount">$125.25</th>
                    <th className="WidgetLgStatus">
                        <Button type="Done"/>
                    </th>
                </tr>
                <tr className="WidgetLgTr">
                    <th className="WidgetLgUser">
                        <img src="https://i.pinimg.com/736x/76/07/5c/76075c11bfe509ee9a11d9baa991c40d.jpg" alt="" className="WidgetLgAvt" />
                        <span className="WidgetLgUserName">Hot Girl</span>
                    </th>
                    <th className="WidgetLgDate">4 July 2021</th>
                    <th className="WidgetLgAmount">$125.25</th>
                    <th className="WidgetLgStatus">
                        <Button type="Pending"/>
                    </th>
                </tr>
                <tr className="WidgetLgTr">
                    <th className="WidgetLgUser">
                        <img src="https://i.pinimg.com/736x/76/07/5c/76075c11bfe509ee9a11d9baa991c40d.jpg" alt="" className="WidgetLgAvt" />
                        <span className="WidgetLgUserName">Hot Girl</span>
                    </th>
                    <th className="WidgetLgDate">4 July 2021</th>
                    <th className="WidgetLgAmount">$125.25</th>
                    <th className="WidgetLgStatus">
                        <Button type="Declined"/>
                    </th>
                </tr>
            </table>
        </div>
    )
}
