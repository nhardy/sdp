const fakeBaseUrl = 'https://fakeapi.com/api';
const baseUrl = sinon.stub();
const classes = proxyquire('app/actions/classes', {
  'app/lib/endpoints': baseUrl,
});


describe('Classes action creators', () => {
  let action;

  beforeEach(() => {
    baseUrl.returns(fakeBaseUrl);
  });

  afterEach(() => {
    baseUrl.reset();
  });

  describe('getWorkshopSets()', () => {
    const { getWorkshopSets } = classes;

    beforeEach(() => {
      action = getWorkshopSets();
    });

    it('should return an action with the correct properties', () => {
      expect(action).to.deep.equal({
        types: ['GET_WORKSHOP_SETS_REQUEST', 'GET_WORKSHOP_SETS_SUCCESS', 'GET_WORKSHOP_SETS_FAILURE'],
        endpoint: {
          url: `${fakeBaseUrl}/workshop/workshopSets/true`,
        },
      });
    });

  });

  describe('getWorkshops()', () => {
    const { getWorkshops } = classes;
    const workshopSetId = 5;

    beforeEach(() => {
      action = getWorkshops(workshopSetId);
    });

    it('should return an action with the correct properties', () => {
      expect(action).to.deep.equal({
        types: ['GET_WORKSHOPS_REQUEST', 'GET_WORKSHOPS_SUCCESS', 'GET_WORKSHOPS_FAILURE'],
        workshopSetId,
        endpoint: {
          url: `${fakeBaseUrl}/workshop/search`,
          query: {
            active: 'true',
            workshopSetId,
          },
        },
      });
    });

  });

  describe('getWorkshop()', () => {
    const { getWorkshop } = classes;
    const workshopId = 7;

    beforeEach(() => {
      action = getWorkshop(workshopId);
    });

    it('should return an action with the correct properties', () => {
      expect(action).to.deep.equal({
        types: ['GET_WORKSHOP_REQUEST', 'GET_WORKSHOP_SUCCESS', 'GET_WORKSHOP_FAILURE'],
        workshopId,
        endpoint: {
          url: `${fakeBaseUrl}/workshop/${workshopId}`,
        },
      });
    });

  });

});
