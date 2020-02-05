/*
 * Copyright 2019 Fluence Labs Limited
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

use libp2p::core::Multiaddr;
use libp2p::floodsub;
use libp2p::identity::Keypair;
use std::net::IpAddr;
use std::time::Duration;

pub enum ClientType {
    Libp2p,
    Websocket,
}

pub struct NodeServiceConfig {
    /// Local port to listen on.
    pub listen_port: u16,

    /// Local ip address to listen on.
    pub listen_ip: IpAddr,

    /// Socket timeout for main transport.
    pub socket_timeout: Duration,

    /// Bootstrap nodes to join to the Fluence network.
    pub bootstrap_nodes: Vec<Multiaddr>,

    /// Topic with network updates to subscribe at the start.
    pub churn_topic: floodsub::Topic,

    /// Service will use libp2p as a client.
    pub client: ClientType,

    /// Key that will be used during peer id creation.
    pub key_pair: Option<Keypair>,
}

impl Default for NodeServiceConfig {
    fn default() -> Self {
        Self {
            listen_port: 7777,
            listen_ip: "0.0.0.0".parse().unwrap(),
            socket_timeout: Duration::from_secs(20),
            bootstrap_nodes: vec![],
            churn_topic: floodsub::TopicBuilder::new("churn").build(),
            client: ClientType::Websocket,
            key_pair: None,
        }
    }
}

pub struct PeerServiceConfig {
    /// Local port to listen on.
    pub listen_port: u16,

    /// Local ip address to listen on.
    pub listen_ip: IpAddr,

    /// Socket timeout for main transport.
    pub socket_timeout: Duration,

    /// Key that will be used during peer id creation.
    pub key_pair: Option<Keypair>,
}

impl Default for PeerServiceConfig {
    fn default() -> Self {
        Self {
            listen_port: 9999,
            listen_ip: "0.0.0.0".parse().unwrap(),
            socket_timeout: Duration::from_secs(20),
            key_pair: None
        }
    }
}

pub struct WebsocketConfig {
    /// Local port to listen on.
    pub listen_port: u16,

    /// Local ip address to listen on.
    pub listen_ip: IpAddr,

    /// Socket timeout for main transport.
    pub socket_timeout: Duration,
}

impl Default for WebsocketConfig {
    fn default() -> Self {
        Self {
            listen_port: 8888,
            listen_ip: "0.0.0.0".parse().unwrap(),
            socket_timeout: Duration::from_secs(20),
        }
    }
}
