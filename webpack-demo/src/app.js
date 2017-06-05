// src/app.js
import {groupBy} from 'lodash/collection'
import people2 from './people'

const people = [{
  manager: 'Jen',
  name: 'Bob'
}, {
  manager: 'Jen',
  name: 'Sue'
}, {
  manager: 'Bob',
  name: 'Shirley'
}, {
  manager: 'Bob',
  name: 'Terrence'
}]
const managerGroups = groupBy(people, 'manager')

const root = document.querySelector('#root')
root.innerHTML = `<p>Inline data</p><pre>${JSON.stringify(managerGroups, null, 2)}</pre>`


const managerGroups2 = groupBy(people2, 'manager')
const root2 = document.querySelector('#root2')
root2.innerHTML = `<p>Module data</p><pre>${JSON.stringify(managerGroups2, null, 2)}</pre>`
