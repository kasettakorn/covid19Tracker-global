import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import Countup from 'react-countup';
import cx from 'classnames';
import styles from './Cards.module.css';

const Covid19info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return 'กำลังดึงข้อมูล ....';
    }

    return (
        <div className={styles.container}>
            <Grid container justify="center">
                <Grid item xs={12} md={5} component={Card} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            ติดเชื้อ
                        </Typography>
                        <Typography variant="h5" component="h2">
                            <Countup start={0} end={confirmed.value} duration={2} separator="," /> ราย
                        </Typography>


                    </CardContent>
                </Grid>
                <Grid item xs={12} md={5} component={Card} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            รักษาหาย
                        </Typography>
                        <Typography variant="h5" component="h2">
                            <Countup start={0} end={recovered.value} duration={2.75} separator="," /> ราย
                        </Typography>
  
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={5} component={Card} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            เสียชีวิต
                        </Typography>
                        <Typography variant="h5" component="h2">
                            <Countup start={0} end={deaths.value} duration={2.75} separator="," /> ราย
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}
export default Covid19info;