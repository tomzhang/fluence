/*
 * Copyright 2020 Fluence Labs Limited
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

use particle_protocol::Particle;
use test_utils::{make_swarms, ConnectedClient};

#[test]
fn echo_particle() {
    let swarms = make_swarms(3);
    let mut client = ConnectedClient::connect_to(swarms[0].1.clone()).expect("connect client");

    let mut particle = Particle::default();
    particle.id = "123".to_string();
    particle.init_peer_id = client.peer_id.clone();
    client.send(particle.clone());
    let response = client.receive();
    assert_eq!(response.id, particle.id);
    assert_eq!(response.data, particle.data);
}