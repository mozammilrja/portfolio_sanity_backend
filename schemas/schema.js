import createSchema from 'part:@sanity/base/schema-creator'


import schemaTypes from 'all:part:@sanity/base/schema-type'
import testimonials from './testimonials'
import about from './about'
import brand from './brand'
import contact from './contact'
import skills from './skills'
import workExperience from './workExperience'
import work from './work'
import experiences from './experiences'



export default createSchema({

  name: 'default',
  types: schemaTypes.concat([
    testimonials,about,brand,contact,skills,workExperience,work
,experiences  ]),
})
