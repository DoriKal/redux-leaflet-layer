import React from 'react';
import {
  Lmap, reducers as lmapReducers, actionCreators,
} from 'react-redux-leaflet';
import { Map } from 'immutable';
import L from 'leaflet';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux-immutablejs';
import ShowMapStore from './ShowMapStore';

const simpleReduxStore = createStore(combineReducers(lmapReducers));
const { dispatch } = simpleReduxStore;

const SimpleRedux = () => (
  <Provider store={simpleReduxStore}>
    <div>
      <h4>Simple Redux usage</h4>
      <div style={{ width: 300, height: 300 }}>
        <Lmap
          lmapId="simpleRedux"
          defaultCenter={new Map({ x: 44, y: 56 })}
          defaultZoom={5}
          defaultLayers={
            [L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')]
          }
        />
      </div>
      <button onClick={() => dispatch(actionCreators.setZoom(15, 'simpleRedux'))}>
        Zoom In
      </button>
      <h5>Redux store state for current map:</h5>
      <ShowMapStore lmapId="simpleRedux" />
    </div>
  </Provider>
);

export default SimpleRedux;
