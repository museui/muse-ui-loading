import Vue from 'vue';
import { FadeTransition } from 'muse-ui/lib/internal/transitions';
import Progress from 'muse-ui/lib/Progress/CircularProgress';
import Loading from './index';
import 'muse-ui/lib/styles/components/progress.less';
import 'muse-ui/lib/styles/theme.less';

Vue.component(Progress.name, Progress);
Vue.component(FadeTransition.name, FadeTransition);

if (typeof window !== undefined && window.Vue) window.Vue.use(Loading);
export default Loading;
