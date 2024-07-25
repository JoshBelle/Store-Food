import { Input } from '../ui'
import CheckboxFiltersGroup from './checkbox-filters-group'
import FilterCheckbox from './filter-checkbox'
import { RangeSlider } from './range-slider'
import Title from './title'
import React from 'react'

interface Props {
    className?: string
}

const Filters:React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
        <Title text="Фильтрация" size="sm" className='mb-5 font-bold' />
        <div className='flex flex-col gap-4'>
            <FilterCheckbox text="Можно собирать" value="1"/>
            <FilterCheckbox text="Новинки" value="2"/>
        </div>
        <div className='mt-5 border-y-neutral-100 py-6 pb-7'>
            <p className='font-bold mb-3'>Цена от и до:</p>
            <div className='flex gap-3 mb-5'>
                <Input type='number' min={100} max={1000} placeholder='0' defaultValue={0}/>
                <Input type='number' min={100} max={1000} placeholder='1000'/>
            </div>
            <RangeSlider min={0} max={1000} step={10} value={[0, 1000]}/>
        </div>
        <CheckboxFiltersGroup 
            title='Игридиенты'
            className='mt-5'
            limit={6}
            defaultItems={[
                {
                    text: 'Сырный соус',
                    value: '1'
                },
                {
                    text: 'Моцарелла',
                    value: '2'
                },
                {
                    text: 'Чеснок',
                    value: '3'
                },
                {
                    text: 'Соленые огурчики',
                    value: '4'
                },
                {
                    text: 'Красный лук',
                    value: '5'
                },
                {
                    text: 'Томаты',
                    value: '6'
                },
            ]}
            items={[
                {
                    text: 'Сырный соус',
                    value: '1'
                },
                {
                    text: 'Моцарелла',
                    value: '2'
                },
                {
                    text: 'Чеснок',
                    value: '3'
                },
                {
                    text: 'Соленые огурчики',
                    value: '4'
                },
                {
                    text: 'Красный лук',
                    value: '5'
                },
                {
                    text: 'Томаты',
                    value: '6'
                },
                {
                    text: 'Сырный соус',
                    value: '1'
                },
                {
                    text: 'Моцарелла',
                    value: '2'
                },
                {
                    text: 'Чеснок',
                    value: '3'
                },
                {
                    text: 'Соленые огурчики',
                    value: '4'
                },
                {
                    text: 'Красный лук',
                    value: '5'
                },
                {
                    text: 'Томаты',
                    value: '6'
                },
            ]}
        />
    </div>
  )
}

export default Filters