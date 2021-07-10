import "./Hot.css"


const Button = ({type}) => {
    return (
        <button className={"HotButton " + type}>{type}</button>
        
    )
};

export default function HotTable() {
    return (
        
        <table className="HotTable">
        <tr className="HotTr">
            <th className="HotTh">Customer</th>
            <th className="HotTh">Date</th>
            <th className="HotTh">Amount</th>
            <th className="HotTh">Status</th>
        </tr>
        <tr className="HotTr">
            <th className="HotUser">
                <img src="https://i.pinimg.com/736x/76/07/5c/76075c11bfe509ee9a11d9baa991c40d.jpg" alt="" className="HotAvt" />
                <span className="HotUserName">Hot Girl</span>
            </th>
            <th className="HotDate">4 July 2021</th>
            <th className="HotAmount">$125.25</th>
            <th className="HotStatus">
                <Button type="Done"/>
            </th>
        </tr>
        <tr className="HotTr">
            <th className="HotUser">
                <img src="https://i.pinimg.com/736x/76/07/5c/76075c11bfe509ee9a11d9baa991c40d.jpg" alt="" className="HotAvt" />
                <span className="HotUserName">Hot Girl</span>
            </th>
            <th className="HotDate">4 July 2021</th>
            <th className="HotAmount">$125.25</th>
            <th className="HotStatus">
                <Button type="Done"/>
            </th>
        </tr>
        <tr className="HotTr">
            <th className="HotUser">
                <img src="https://i.pinimg.com/736x/76/07/5c/76075c11bfe509ee9a11d9baa991c40d.jpg" alt="" className="HotAvt" />
                <span className="HotUserName">Hot Girl</span>
            </th>
            <th className="HotDate">4 July 2021</th>
            <th className="HotAmount">$125.25</th>
            <th className="HotStatus">
                <Button type="Pending"/>
            </th>
        </tr>
        <tr className="HotTr">
            <th className="HotUser">
                <img src="https://i.pinimg.com/736x/76/07/5c/76075c11bfe509ee9a11d9baa991c40d.jpg" alt="" className="HotAvt" />
                <span className="HotUserName">Hot Girl</span>
            </th>
            <th className="HotDate">4 July 2021</th>
            <th className="HotAmount">$125.25</th>
            <th className="HotStatus">
                <Button type="Declined"/>
            </th>
        </tr>
    </table>
    )
}
