import React from 'react';
import { View } from "react-native";
import { VictoryChart, VictoryLine, VictoryAxis, VictoryScatter } from "victory-native";

const y = (x: number) => Math.sin(x / 10);

type AppProps = {
  data: Array<{ x: number, y: number }>,
  xMax: Number,
  yMax: Number,
  pwrGoal: Number,
};

export default function Graph({ data, xMax, yMax, pwrGoal }: AppProps) {
  data[data.length - 1]["symbol"] = "circle"
  return (
    <View>
      <VictoryChart
        padding={50}
        height={500}
        domain={{ x: [0, xMax], y: [0, yMax] }}
        theme={{
          axis: {
            style: {
              axis: {
                stroke: 'white',
              },
              tickLabels: {
                fill: 'white',
                padding: 7,
                fontWeight: 'bold',
              },
              ticks: {
                stroke: 'white',
              }
            }
          }
        }}
      >
        <VictoryAxis
          dependentAxis={true}
        />
        <VictoryAxis />
        {data.length < 2 ?
          <VictoryScatter
            data={data}
          />
          :
          <VictoryAxis
            dependentAxis={true}

          />
        }
        <VictoryLine
          style={{
            data: {
              stroke: 'white', strokeWidth: 2
            }
          }
          }
          data={data}
        />
        <VictoryLine y={() => pwrGoal} style={{
          data: { stroke: 'green', strokeDasharray: "15,5", strokeWidth: 3, }
        }} />
      </VictoryChart>
    </View>
  );
}    
