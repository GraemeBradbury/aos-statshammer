import { useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import StoreSubscriber from 'components/StoreSubscriber';
import React, { lazy, Suspense, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { scrollToTop, setAutoScrollEnabled } from 'utils/scrollIntoView';
import { UNIT_SUBROUTES } from 'utils/urls';

const ExportUnit = lazy(() => import('containers/ExportUnit'));
const ImportUnit = lazy(() => import('containers/ImportUnit'));
const DesktopHome = lazy(() => import('./DesktopHome'));
const MobileHome = lazy(() => import('./MobileHome'));

const useStyles = makeStyles(() => ({
  home: {
    flex: 1,
  },
}));

const Home = () => {
  const classes = useStyles();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    setAutoScrollEnabled(false);
    setTimeout(() => {
      scrollToTop(true);
    }, 250);
    setTimeout(() => {
      setAutoScrollEnabled(true);
    }, 1000);
  }, []);

  return (
    <div className={classes.home}>
      <StoreSubscriber />
      <Suspense fallback={null}>
        <Switch>
          <Route path={UNIT_SUBROUTES.IMPORT} component={ImportUnit} />
          <Route path={UNIT_SUBROUTES.EXPORT} component={ExportUnit} />
          <Route path="/" component={mobile ? MobileHome : DesktopHome} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default Home;
