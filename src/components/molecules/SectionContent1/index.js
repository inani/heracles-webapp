import * as React from 'react'
import classnames from 'classnames/bind'

//Import atoms
import Btn from "../../atoms/Button"

type Props = {
    sociallinks: string,
    companyinfo: string,
    logo: string
}

const SectionContent = (props: Props): React.Element<*> => {
    const { sociallinks, companyinfo, logo } = props;

    return (
        <div className="container">
            <h2>Drei Gründe zu schöner Haut.<br/>Garantiert</h2>
            <div className="row">
                <div className="col-md-4">
                    
                </div>
                <div className="col-md-4">
                
                </div>
                <div className="col-md-4">
                
                </div>
                <Btn>Beautyprogramm starten</Btn>
            </div>
        </div>
    )
}

export default SectionContent