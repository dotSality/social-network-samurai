import React from 'react';
import { Select } from 'antd';
import { useSearchParams } from 'react-router-dom';
import s from './SortSelect.module.scss';
import { CaretDownOutlined } from '@ant-design/icons';

const pageSizeFilterValues: number[] = [3, 5, 7, 10, 20];

export const SortSelect = () => {
  const [search, setParams] = useSearchParams();

  const count = Number(search.get('count')) || 10;

  const onSelectChange = (value: number) => {
    search.set('count', String(value));
    setParams(search);
  };

  const selectOptions = pageSizeFilterValues.map((size) => ({ value: size, label: size }));

  return <Select
    className={s.select}
    suffixIcon={<CaretDownOutlined/>}
    defaultValue={count || 10}
    onChange={onSelectChange}
    options={selectOptions}
  />;
};