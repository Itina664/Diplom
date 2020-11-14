import Statistics from '../js/components/Statistics.js';
import DataStorage from '../js/modules/DataStorage.js';

import "../css-pages/analytics.css";

const statistics = new Statistics(new DataStorage);

statistics.keyWordTitle();
statistics.countNewsWeek();
statistics.countMentionWeek();
