import React, { Fragment } from 'react';
import { Text } from 'react-native';

const Detail = ({route, navigation}) => {
    const movieDetail = route.params.movieDetail;
    {console.log(movieDetail)}
    return (
        <Fragment>
            <Text>{movieDetail.name}</Text>
        </Fragment>        
    );
}

export default Detail;