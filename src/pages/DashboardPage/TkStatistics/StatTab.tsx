import {FC} from 'react';
import {Divider, Stack} from '@mui/material';

import {TkStatItem} from '@entities/dashboard';
import {CardBox, CountValue, CurrencyValue} from '@shared/components';
import {COLOR__GRAY} from '../../../theme/colors';
import {ColorPercentValue} from './ColorPercentValue';
import {GreyRow} from './GreyRow';
import {PercentValue} from './PercentValue';
import {Row} from './Row';
import {RowStack} from './RowStack';
import {SecondaryValue} from './SecondaryValue';
import {Value} from './Value';

interface Props {
  stat: TkStatItem;
}

export const StatTab: FC<Props> = ({stat}) => {
  const {
    sales_delta_py,
    sales_thousand_rub,
    sales_delta_kpi,
    lfl_growth_py,
    receipt_count,
    receipt_count_delta_py,
    average_receipt_rub,
    average_receipt_delta_py,
    utd_thousand_rub,
    utd_percent,
    write_offs_thousand_rub,
    write_offs_percent,
    full_margin_percent,
  } = stat;

  return (
    <Stack gap={2}>
      <CardBox p={2}>
        <Stack spacing={2} divider={<Divider />}>
          <RowStack>
            <Row
              label="Товарооборот"
              preValue={
                <Value>
                  <CurrencyValue value={sales_thousand_rub} />
                </Value>
              }
              value={<ColorPercentValue value={sales_delta_py} />}
            />

            <GreyRow
              label="Продажи to KPI"
              value={<PercentValue value={sales_delta_kpi ?? 0} />}
            />
          </RowStack>

          <Row
            label="LFL"
            value={
              <PercentValue
                value={lfl_growth_py ?? 0}
                isColorDeterminedByValue={false}
              />
            }
          />

          <RowStack>
            <Row
              label="Общее количество чеков"
              value={
                <Value>
                  <CountValue value={receipt_count} />
                </Value>
              }
            />

            <GreyRow
              label="to PY"
              value={<ColorPercentValue value={receipt_count_delta_py} />}
            />
          </RowStack>

          <RowStack>
            <Row
              label="Средний чек"
              value={
                <Value>
                  <CurrencyValue value={average_receipt_rub} />
                </Value>
              }
            />

            <GreyRow
              label="to PY"
              value={<ColorPercentValue value={average_receipt_delta_py} />}
            />
          </RowStack>
        </Stack>
      </CardBox>

      <CardBox p={2}>
        <RowStack>
          <Row
            label="УТД"
            preValue={
              <Value>
                <CurrencyValue value={utd_thousand_rub} />
              </Value>
            }
            value={<ColorPercentValue value={utd_percent ?? 0} />}
          />

          <GreyRow
            label="Списание"
            preValue={
              <SecondaryValue sx={{color: COLOR__GRAY}}>
                <CurrencyValue value={write_offs_thousand_rub} />
              </SecondaryValue>
            }
            value={<PercentValue value={write_offs_percent} />}
          />
        </RowStack>
      </CardBox>

      <CardBox p={2}>
        <Row
          label="Маржа по ТК"
          value={<ColorPercentValue value={full_margin_percent} />}
        />
      </CardBox>
    </Stack>
  );
};
