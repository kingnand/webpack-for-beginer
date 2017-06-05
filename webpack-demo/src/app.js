// src/app.js
import './style.scss'
import {groupBy} from 'lodash/collection'
import people from './people'

const managerGroups = groupBy(people, 'manager')
const root = document.querySelector('#root')
root.innerHTML = `<p>Inline data</p><pre>${JSON.stringify(managerGroups, null, 2)}</pre>`
