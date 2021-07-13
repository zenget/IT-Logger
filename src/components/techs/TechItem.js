import React from 'react'
import { connect } from 'react-redux'
import { deleteTechs } from '../../actions/techActions'
import PropTypes from 'prop-types'

const TechItem = ({ tech, deleteTechs }) => {
    return (
        <li className="collection-item">
            <div>
                {tech.firstName} {tech.lastName}
                <a href="#!" onClick={() => deleteTechs(tech.id)} className="secondary-content">
                    <i className="material-icons grey-text">delete</i>
                </a>
            </div>
        </li>
    )
}

TechItem.propTypes = {
    tech: PropTypes.object.isRequired,
}

export default connect(null, { deleteTechs })(TechItem)
