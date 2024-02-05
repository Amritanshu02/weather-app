import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

const pData = [24, 13, 19, 19, 15, 20, 10];
const xLabels = [
    'Sun',
    'Mon',
    'Tues',
    'Wed',
    'Thru',
    'Fri',
    'Sat',
];

export default function BasicLineChart() {
    return (
        <LineChart
            width={600}
            height={300}
            series={[
                { data: pData }
            ]}
            xAxis={[{ scaleType: 'point', data: xLabels }]}
        />
    );
}