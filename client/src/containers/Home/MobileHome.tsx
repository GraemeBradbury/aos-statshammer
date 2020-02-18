import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { RoutedTabs } from 'components/Tabbed';
import Stats from 'containers/Stats';
import Target from 'containers/Target';
import Units from 'containers/Units';
import React, { useState } from 'react';
import { ROUTES } from 'utils/urls';

const useStyles = makeStyles(() => ({
  mobileHome: {
    display: 'flex',
    flex: 1,
  },
  tabs: {
    marginTop: 0,
    maxWidth: '100vw',
  },
  tab: {
    padding: '.5em',
  },
}));

const MobileAppContent = () => {
  const classes = useStyles();
  const [dragging, setDragging] = useState(false);

  return (
    <div className={classes.mobileHome}>
      <Grid container>
        <Grid item xs={12}>
          <RoutedTabs
            className={classes.tabs}
            tabNames={['Units', 'Target', 'Stats']}
            tabContent={[
              <Units className={classes.tab} setDragging={setDragging} />,
              <Target className={classes.tab} />,
              <Stats className={classes.tab} />,
            ]}
            tabRoutes={[ROUTES.HOME, ROUTES.TARGET, ROUTES.STATS]}
            disableEvents={dragging}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default MobileAppContent;
