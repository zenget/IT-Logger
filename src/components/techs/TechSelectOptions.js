import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { getTechs } from '../../actions/techActions';

const TechSelectOptions = ({ tech: { techs, loading }, getTechs }) => {

    useEffect(() => {
        getTechs();

        //eslint-disable-next-line
    }, []);

    return (
        !loading && techs !== null && techs.map(tech => (
            <option value={`${tech.firstName} ${tech.lastName}`}>
                {tech.firstName} {tech.lastName}
            </option>))
    )
}


TechSelectOptions.propTypes = {
    tech: PropTypes.object.isRequired,
    getTechs: PropTypes.func.isRequired,
}
const mapStateToProps = state => ({
    tech: state.tech,

})
export default connect(mapStateToProps, { getTechs })(TechSelectOptions);

