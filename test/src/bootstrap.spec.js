/* eslint-disable */

import { expect } from 'chai'
import app from '../../src/bootstrap'

describe('bootstrap', () => {
  it('should bootstrap the application', () => {
      expect(app).to.exist
  })
})
