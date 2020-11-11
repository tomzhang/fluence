(function() {var implementors = {};
implementors["fluence_client"] = [{"text":"impl !UnwindSafe for Client","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Transport","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ClientCommand","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ClientEvent","synthetic":true,"types":[]}];
implementors["fluence_libp2p"] = [{"text":"impl UnwindSafe for RandomPeerId","synthetic":true,"types":[]}];
implementors["host_closure"] = [{"text":"impl UnwindSafe for Args","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for ArgsError","synthetic":true,"types":[]}];
implementors["particle_actors"] = [{"text":"impl UnwindSafe for VmPoolConfig","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for Plumber","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PlumberEvent","synthetic":true,"types":[]}];
implementors["particle_behaviour"] = [{"text":"impl !UnwindSafe for ParticleBehaviour","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ParticleConfig","synthetic":true,"types":[]}];
implementors["particle_closures"] = [{"text":"impl !UnwindSafe for BuiltinServicesApi","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for HostClosures","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for Mailbox","synthetic":true,"types":[]},{"text":"impl UnwindSafe for BuiltinCommand","synthetic":true,"types":[]}];
implementors["particle_dht"] = [{"text":"impl UnwindSafe for DHTConfig","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for ParticleDHT","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ResolveError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for DHTEvent","synthetic":true,"types":[]},{"text":"impl UnwindSafe for NeighborhoodError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ResolveErrorKind","synthetic":true,"types":[]}];
implementors["particle_modules"] = [{"text":"impl UnwindSafe for Blueprint","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for ModuleError","synthetic":true,"types":[]}];
implementors["particle_protocol"] = [{"text":"impl UnwindSafe for ProtocolConfig","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Particle","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ProtocolMessage","synthetic":true,"types":[]}];
implementors["particle_providers"] = [{"text":"impl UnwindSafe for Provider","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ProviderRepository","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for ProviderError&lt;'a&gt;","synthetic":true,"types":[]}];
implementors["particle_server"] = [{"text":"impl !UnwindSafe for ServerBehaviour","synthetic":true,"types":[]},{"text":"impl UnwindSafe for BootstrapConfig","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for Server","synthetic":true,"types":[]},{"text":"impl UnwindSafe for AppServicesConfig","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !UnwindSafe for BehaviourConfig&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for FluenceConfig","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ServerConfig","synthetic":true,"types":[]}];
implementors["particle_services"] = [{"text":"impl !UnwindSafe for ParticleAppServices","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ServicesConfig","synthetic":true,"types":[]}];
implementors["test_utils"] = [{"text":"impl !UnwindSafe for ConnectedClient","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CreatedSwarm","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Trust","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !UnwindSafe for SwarmConfig&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Instruction","synthetic":true,"types":[]}];
implementors["trust_graph"] = [{"text":"impl UnwindSafe for Certificate","synthetic":true,"types":[]},{"text":"impl UnwindSafe for KeyPair","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PublicKeyHashable","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Trust","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TrustGraph","synthetic":true,"types":[]}];
implementors["waiting_queues"] = [{"text":"impl&lt;K, V&gt; UnwindSafe for WaitingQueues&lt;K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Enqueued","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()