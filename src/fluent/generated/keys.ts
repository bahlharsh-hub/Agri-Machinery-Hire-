import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    agri_app_menu: {
                        table: 'sys_app_application'
                        id: '8917155ff1cd4ad8ad151a0a40919b67'
                    }
                    agri_machinery_dashboard: {
                        table: 'par_dashboard'
                        id: '2709774e94b64a748b9857f1d12192ee'
                    }
                    agri_menu_category: {
                        table: 'sys_app_category'
                        id: '8be030c528444f16a79ec2fd5f88bd9d'
                    }
                    agri_module_all_requests: {
                        table: 'sys_app_module'
                        id: '9551d0ce3a194f27bc86b666ed7473be'
                    }
                    agri_module_browse_machinery: {
                        table: 'sys_app_module'
                        id: '4e280fade95144c0a5b2785625152b66'
                    }
                    agri_module_farmers_list: {
                        table: 'sys_app_module'
                        id: '8c180acb833a41438d39c8bd68350d26'
                    }
                    agri_module_machinery_list: {
                        table: 'sys_app_module'
                        id: 'd4d520ea19b8460e925334858f2fa0f5'
                    }
                    agri_module_my_requests: {
                        table: 'sys_app_module'
                        id: '0b4c6aefa6924b2888621b6a36d8095e'
                    }
                    agri_module_new_farmer: {
                        table: 'sys_app_module'
                        id: '9b18f205e45a4a088bdc201b032eedee'
                    }
                    agri_module_new_machinery: {
                        table: 'sys_app_module'
                        id: '29d744ca5f8a4e4f9d45d5430a3e4a51'
                    }
                    agri_module_new_request_admin: {
                        table: 'sys_app_module'
                        id: 'c2e4f6e3822b4d8fac13ab3331aaab5a'
                    }
                    agri_module_pending_requests: {
                        table: 'sys_app_module'
                        id: 'b8b339f0c9c840f69c91f9b862fd3c81'
                    }
                    agri_module_sep_admin: {
                        table: 'sys_app_module'
                        id: '8e26ed169a0e4f5eac6c66fade36198f'
                    }
                    agri_module_sep_farmer: {
                        table: 'sys_app_module'
                        id: '64c18739fb4a418488800d6bf1b39512'
                    }
                    agri_module_sep_farmers: {
                        table: 'sys_app_module'
                        id: 'b67cf6fc3ad4471691d484930cf94b76'
                    }
                    agri_module_sep_machinery: {
                        table: 'sys_app_module'
                        id: 'c36ebc5f71344f88bded6203a0c1bf73'
                    }
                    agri_module_submit_request: {
                        table: 'sys_app_module'
                        id: '164c3fa65717482c9335ad2486ccd6c4'
                    }
                    availability_check: {
                        table: 'sys_script'
                        id: '1382533f33d64dd19f504eba5417a2ae'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: '8c023b4dfa8045ba953b5737ea5c700b'
                    }
                    dashboard_tab_fleet: {
                        table: 'par_dashboard_tab'
                        id: 'e2b7424f03d24d2fb10f3a312a8c6a1a'
                    }
                    dashboard_tab_overview: {
                        table: 'par_dashboard_tab'
                        id: '7aa1639c86e1461cb7efc9a295bd7cef'
                    }
                    drone_analysis_util: {
                        table: 'sys_script_include'
                        id: '8c60dda567724df8871a244e25671757'
                    }
                    drone_image_trigger: {
                        table: 'sys_script'
                        id: '42c9cf4381834e6b9a1dc38c8e25553b'
                    }
                    farmer_admin_create: {
                        table: 'sys_security_acl'
                        id: '35c31ec7ae5e42b38f596fb342fb56f4'
                    }
                    farmer_admin_read: {
                        table: 'sys_security_acl'
                        id: '16d1563a794f44bb87832dd9d3333043'
                    }
                    farmer_admin_write: {
                        table: 'sys_security_acl'
                        id: 'ad508982a78c4865a6114763561db8d6'
                    }
                    farmer_self_read: {
                        table: 'sys_security_acl'
                        id: '3027743acb624ba9aca1fb9d93a9897c'
                    }
                    farmer_self_write: {
                        table: 'sys_security_acl'
                        id: '5991578ceee54f74a57882eca21197d8'
                    }
                    hire_request_admin_create: {
                        table: 'sys_security_acl'
                        id: '0e004c49e24b4d229019465b0aee62ac'
                    }
                    hire_request_admin_delete: {
                        table: 'sys_security_acl'
                        id: 'adbddbb00beb4f7085f0eb3e43d00b39'
                    }
                    hire_request_admin_read: {
                        table: 'sys_security_acl'
                        id: '3d3a9312384642d28ecd180a5b2131c1'
                    }
                    hire_request_admin_write: {
                        table: 'sys_security_acl'
                        id: '0570118bedae4ce48e9e56bc2115a48e'
                    }
                    hire_request_approved: {
                        table: 'sysevent_email_action'
                        id: '4938e9c30d0f49b1b2853089df6e6c08'
                    }
                    hire_request_farmer_create: {
                        table: 'sys_security_acl'
                        id: 'e1053234027246a5bc00bacf59956433'
                    }
                    hire_request_farmer_read: {
                        table: 'sys_security_acl'
                        id: 'beb7852dce0943649e733cc22161ae05'
                    }
                    hire_request_rejected: {
                        table: 'sysevent_email_action'
                        id: '8f0955ada3d54877a843ac511dd08c0c'
                    }
                    machinery_catalog_admin_create: {
                        table: 'sys_security_acl'
                        id: '2833987c2fe74bbeb3e527e30ce4c89f'
                    }
                    machinery_catalog_admin_read: {
                        table: 'sys_security_acl'
                        id: 'e2866dfe28874cbcb834eb6614ccc72a'
                    }
                    machinery_catalog_admin_write: {
                        table: 'sys_security_acl'
                        id: 'be7d7d86968043f4bd882ab54e21f044'
                    }
                    machinery_catalog_farmer_read: {
                        table: 'sys_security_acl'
                        id: '46285bdb9dd645bc8eb835aafda6c464'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'db3ab7f62a544088918d79330ab58555'
                    }
                    seed_machinery_catalog: {
                        table: 'sysauto_script'
                        id: '344eb31283bf414d812dcc5eda910872'
                    }
                    'src_server_business-rules_availability-check_server_js': {
                        table: 'sys_module'
                        id: 'b8790a3eb6bb47b794608dfe01c8afec'
                    }
                    'src_server_business-rules_drone-image-trigger_server_js': {
                        table: 'sys_module'
                        id: '81f8b988fc9e4793b10e87536467a584'
                    }
                    'src_server_scheduled-scripts_seed-machinery-catalog_server_js': {
                        table: 'sys_module'
                        id: 'f6a017f69cdc4630823f9474ed68f589'
                    }
                    'src_server_script-includes_DroneAnalysisUtil_server_js': {
                        table: 'sys_module'
                        id: 'b1d0195c09674d33aa56698c5025b6d9'
                    }
                    widget_approved: {
                        table: 'par_dashboard_widget'
                        id: 'afecd86f615e40949d7943b12f556906'
                    }
                    widget_fleet_heading: {
                        table: 'par_dashboard_widget'
                        id: '3f57bca7828b4c72b660e9a25ea8b6cc'
                    }
                    widget_fleet_list: {
                        table: 'par_dashboard_widget'
                        id: '1ac83061f4b1434db2a2c28f32d6e0bf'
                    }
                    widget_machinery_bar: {
                        table: 'par_dashboard_widget'
                        id: '4c11301f64ae4903804150706f3892cd'
                    }
                    widget_pending: {
                        table: 'par_dashboard_widget'
                        id: 'ca9a7e892f564ecbbcd87d9d74b9705b'
                    }
                    widget_recent_requests: {
                        table: 'par_dashboard_widget'
                        id: 'fe7465c674a247adb17cae99f200ed13'
                    }
                    widget_rejected: {
                        table: 'par_dashboard_widget'
                        id: '0365def6929f4a0d963def78a0a10589'
                    }
                    widget_status_donut: {
                        table: 'par_dashboard_widget'
                        id: 'e07e0ae5dcbe4038a9798f4f7c1ff59f'
                    }
                    widget_total_today: {
                        table: 'par_dashboard_widget'
                        id: 'bb27fa92347547c4baa40e6012b688ba'
                    }
                }
                composite: [
                    {
                        table: 'sys_documentation'
                        id: '03c836abfe0d4aba8d1c2abee376ca44'
                        key: {
                            name: 'x_agri_hire_hire_request'
                            element: 'rejection_reason'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '060368991a29460a8ab5c1c389f5d19b'
                        key: {
                            name: 'x_agri_hire_hire_request'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '06b34c9688dc485f9f66f3a040aaacfc'
                        key: {
                            name: 'x_agri_hire_hire_request'
                            element: 'irrigation_areas'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '091f6c4192e5410da226bbb4ac997fe4'
                        key: {
                            name: 'x_agri_hire_farmer'
                            element: 'sys_user'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0a4ae73f811042a5a9c37dbf59433d25'
                        key: {
                            name: 'x_agri_hire_hire_request'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '135da71ec31040d9a79a3af52c9e510a'
                        key: {
                            sys_security_acl: '0e004c49e24b4d229019465b0aee62ac'
                            sys_user_role: {
                                id: '1f0d2f2a60044cb0b4747ae62143875c'
                                key: {
                                    name: 'x_agri_hire.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '16348a8375974d57b7b84b3a4a485927'
                        key: {
                            name: 'x_agri_hire_farmer'
                            element: 'sys_user'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1635c9d0a2434e3f93d4cb58ace7874c'
                        key: {
                            name: 'x_agri_hire_farmer'
                            element: 'village'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '16548067cc5b4066b2989c996ea72487'
                        key: {
                            name: 'x_agri_hire_machinery_catalog'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '16a96559c71f4d409470bb66098859c8'
                        key: {
                            name: 'x_agri_hire_hire_request'
                            element: 'machinery_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '17448bc469fb41a48231f62440714883'
                        key: {
                            name: 'x_agri_hire_hire_request'
                            element: 'pest_detection'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '191538ad5d874d1494b16f2015b68829'
                        key: {
                            sys_security_acl: '3027743acb624ba9aca1fb9d93a9897c'
                            sys_user_role: {
                                id: '8b52c17ff26141cf9b90fa7d30ea1f42'
                                key: {
                                    name: 'x_agri_hire.farmer'
                                }
                            }
                        }
                    },
                    {
                        table: 'par_dashboard_canvas'
                        id: '1993745ffff5464c8ad215d08a842718'
                        key: {
                            dashboard: '2709774e94b64a748b9857f1d12192ee'
                            dashboard_tab: '7aa1639c86e1461cb7efc9a295bd7cef'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1a5e13a9d55a4ff79d0e08233f66dd05'
                        key: {
                            name: 'x_agri_hire_hire_request'
                            element: 'farmer'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1a885cf67c38456f9587e9b81d5ba681'
                        key: {
                            name: 'x_agri_hire_hire_request'
                            element: 'drone_image_analyzed'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '1f0d2f2a60044cb0b4747ae62143875c'
                        key: {
                            name: 'x_agri_hire.admin'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '22a36237f51248cfb46d8938678201e9'
                        key: {
                            name: 'x_agri_hire_hire_request'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '238f1d086de04d53aacbd4d95bdd3fc1'
                        key: {
                            sys_security_acl: '5991578ceee54f74a57882eca21197d8'
                            sys_user_role: {
                                id: '8b52c17ff26141cf9b90fa7d30ea1f42'
                                key: {
                                    name: 'x_agri_hire.farmer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '248fd5c34e5945b09d412f5706f758fb'
                        key: {
                            name: 'x_agri_hire_hire_request'
                            element: 'farmer_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '2b474d4f6b2b40d6a5bb1aa59607ea92'
                        key: {
                            sys_security_acl: '2833987c2fe74bbeb3e527e30ce4c89f'
                            sys_user_role: {
                                id: '1f0d2f2a60044cb0b4747ae62143875c'
                                key: {
                                    name: 'x_agri_hire.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2f0c973a2b3a4ac2965a7c55a6f14de2'
                        key: {
                            name: 'x_agri_hire_hire_request'
                            element: 'units_needed'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '31243c38d6694dcbb3b375deb4a6a910'
                        key: {
                            name: 'x_agri_hire_hire_request'
                            element: 'drone_image_analyzed'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3192d28a577f4d63b83be8a3dc79c823'
                        key: {
                            name: 'x_agri_hire_farmer'
                            element: 'email'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '35ec25b422fc46ae8f074fde1d553775'
                        key: {
                            name: 'x_agri_hire_machinery_catalog'
                            element: 'available_units'
                        }
                    },
                    {
                        table: 'par_dashboard_visibility'
                        id: '36395cf214a846568783f6cce333cb7d'
                        key: {
                            dashboard: '2709774e94b64a748b9857f1d12192ee'
                            experience: '08c73d60537101100834ddeeff7b1287'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '365b9e52a42a43a5a4e92fdafff9ac19'
                        key: {
                            name: 'x_agri_hire_machinery_catalog'
                            element: 'is_active'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '386df0e95727414394201879d2be2e98'
                        key: {
                            name: 'x_agri_hire_hire_request'
                            element: 'units_needed'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '38e76a7a06164a16a1c2b1b89a42b645'
                        key: {
                            name: 'x_agri_hire_farmer'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '38f4f9fddeef42058ec18610375ca1ab'
                        key: {
                            name: 'x_agri_hire_farmer'
                            element: 'state'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3cb65e6f96c24005954e4f0bb626146f'
                        key: {
                            name: 'x_agri_hire_machinery_catalog'
                            element: 'name'
                            value: 'drone_irrigation'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3de8e737369c48b291ac3ec4da82be38'
                        key: {
                            name: 'x_agri_hire_farmer'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '43614fd3cd534cd0875f9eadc48e33fb'
                        key: {
                            name: 'x_agri_hire_hire_request'
                            element: 'start_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4477a47ba3fe45a497ee0a2bff5aea32'
                        key: {
                            name: 'x_agri_hire_hire_request'
                            element: 'drone_image_analyzed'
                            value: 'pending'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '462eef36a977495d8a382d4556d2c80a'
                        key: {
                            name: 'x_agri_hire_hire_request'
                            element: 'status'
                            value: 'rejected'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '484ef4954e5947fb88082bbf6fa5a45c'
                        key: {
                            name: 'x_agri_hire_hire_request'
                            element: 'notes'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4879676e1b674cb5a27820f93fe90f93'
                        key: {
                            name: 'x_agri_hire_farmer'
                            element: 'district'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '49c13695edb54e6b8127ab9c70cbeb3f'
                        key: {
                            sys_security_acl: '46285bdb9dd645bc8eb835aafda6c464'
                            sys_user_role: {
                                id: '8b52c17ff26141cf9b90fa7d30ea1f42'
                                key: {
                                    name: 'x_agri_hire.farmer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4a5f5dc6462b45ba885a4abe762aeffe'
                        key: {
                            name: 'x_agri_hire_farmer'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '4d30bab8dc25465b91f798438179f682'
                        key: {
                            sys_security_acl: '16d1563a794f44bb87832dd9d3333043'
                            sys_user_role: {
                                id: '1f0d2f2a60044cb0b4747ae62143875c'
                                key: {
                                    name: 'x_agri_hire.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4f9114ce1a41408a89e3295f64b65efc'
                        key: {
                            name: 'x_agri_hire_hire_request'
                            element: 'start_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '527aabb6bc6d478d823991d34786a2c7'
                        key: {
                            name: 'x_agri_hire_hire_request'
                            element: 'farmer_email'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5311b2b183884d139d5d3eb440aa60c3'
                        key: {
                            name: 'x_agri_hire_hire_request'
                            element: 'rejection_reason'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '57a99f75b1d14e92867cdff55c5e4a5c'
                        key: {
                            name: 'x_agri_hire_hire_request'
                            element: 'farmer_email'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '5a94a0030f5147b19027ee4f6169b2c9'
                        key: {
                            sys_security_acl: 'ad508982a78c4865a6114763561db8d6'
                            sys_user_role: {
                                id: '1f0d2f2a60044cb0b4747ae62143875c'
                                key: {
                                    name: 'x_agri_hire.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'par_dashboard_canvas'
                        id: '5d35cbc5bb354c27b6229f8a8962db7e'
                        key: {
                            dashboard: '2709774e94b64a748b9857f1d12192ee'
                            dashboard_tab: 'e2b7424f03d24d2fb10f3a312a8c6a1a'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5d66833677d74d46971439d24ff180f3'
                        key: {
                            name: 'x_agri_hire_hire_request'
                            element: 'crop_health_assessment'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5dd4b8c9c9d34dbe91a629a4a4dad068'
                        key: {
                            name: 'x_agri_hire_machinery_catalog'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '60722b1c140b4e83bfd6790c1dc1183b'
                        key: {
                            name: 'x_agri_hire_machinery_catalog'
                            element: 'is_active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '63535092c0654eae9d52cc8bf4c3fea7'
                        key: {
                            sys_security_acl: '0570118bedae4ce48e9e56bc2115a48e'
                            sys_user_role: {
                                id: '1f0d2f2a60044cb0b4747ae62143875c'
                                key: {
                                    name: 'x_agri_hire.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '637bc8b5d18f49e6bd0f8d42b356a60a'
                        key: {
                            name: 'x_agri_hire_hire_request'
                            element: 'pest_detection'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '65876b920c83475bb49c0bc083200bd5'
                        key: {
                            name: 'x_agri_hire_hire_request'
                            element: 'end_date'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '672a0add20d4407598a88ba37c850fd1'
                        key: {
                            name: 'x_agri_hire_machinery_catalog'
                            element: 'name'
                            value: 'drone_fertilizer'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '675bdeb05e2345ff81094216504a0256'
                        key: {
                            name: 'x_agri_hire_hire_request'
                            element: 'health_score'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '691f05432407404c81020d35889af0a2'
                        key: {
                            name: 'x_agri_hire_hire_request'
                            element: 'notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '69de77125c414047a6f7d7c33dd5c9f9'
                        key: {
                            name: 'x_agri_hire_hire_request'
                            element: 'field_health_report'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6d11da6d4b3344c69a8ae5ac49582572'
                        key: {
                            name: 'x_agri_hire_hire_request'
                            element: 'farmer_name'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '6e7080a383eb4473bb0fe455317a76c3'
                        key: {
                            name: 'x_agri_hire_farmer'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6ff5f9b5a39a4486a9e587748c81877a'
                        key: {
                            name: 'x_agri_hire_machinery_catalog'
                            element: 'name'
                            value: 'thresher'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '71242eb046414b068422a93560ad976e'
                        key: {
                            sys_security_acl: 'beb7852dce0943649e733cc22161ae05'
                            sys_user_role: {
                                id: '8b52c17ff26141cf9b90fa7d30ea1f42'
                                key: {
                                    name: 'x_agri_hire.farmer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '716ecf52ac4b4f9ba328af2ef3458b2e'
                        key: {
                            name: 'x_agri_hire_farmer'
                            element: 'village'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '78e286b25646487a9e2544ac0ca38587'
                        key: {
                            name: 'x_agri_hire_machinery_catalog'
                            element: 'name'
                            value: 'seed_drill'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7bbcd22f7283491686d9c2a47d2b3149'
                        key: {
                            name: 'x_agri_hire_hire_request'
                            element: 'status'
                            value: 'approved'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '7bdf89fb8c2e4afdbfb4095c755bbfb8'
                        key: {
                            name: 'x_agri_hire_machinery_catalog'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7d54d005a9eb4d468f8aee4ab8a3487c'
                        key: {
                            name: 'x_agri_hire_machinery_catalog'
                            element: 'name'
                            value: 'cultivator'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7fcc1aec59a34b52ac07a997ee19cb8c'
                        key: {
                            name: 'x_agri_hire_farmer'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '803ac10baa0c4de58a4cc32feccdd1e4'
                        key: {
                            name: 'x_agri_hire_hire_request'
                            element: 'crop_health_assessment'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '815a880d43bd4669ba9448cdc8592c97'
                        key: {
                            name: 'x_agri_hire_machinery_catalog'
                            element: 'name'
                            value: 'baler'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '836db4d93760498e990cdb938b0417b1'
                        key: {
                            name: 'x_agri_hire_machinery_catalog'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '8376d34800cd421c9c8fecc3451f8a59'
                        key: {
                            sys_security_acl: '35c31ec7ae5e42b38f596fb342fb56f4'
                            sys_user_role: {
                                id: '1f0d2f2a60044cb0b4747ae62143875c'
                                key: {
                                    name: 'x_agri_hire.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '83d0e011a56543e28c496af85d01e593'
                        key: {
                            name: 'x_agri_hire_hire_request'
                            element: 'irrigation_areas'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '842c1e621ff24890874484e8e52fc2bb'
                        key: {
                            sys_security_acl: 'e2866dfe28874cbcb834eb6614ccc72a'
                            sys_user_role: {
                                id: '1f0d2f2a60044cb0b4747ae62143875c'
                                key: {
                                    name: 'x_agri_hire.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '87f4396551b04c108be9a297d8fa1687'
                        key: {
                            name: 'x_agri_hire_hire_request'
                            element: 'drone_image_analyzed'
                            value: 'completed'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8b32e8975c8347ed97da056339755dee'
                        key: {
                            name: 'x_agri_hire_hire_request'
                            element: 'field_health_report'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '8b52c17ff26141cf9b90fa7d30ea1f42'
                        key: {
                            name: 'x_agri_hire.farmer'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '8b6bd427d8ba48c4ae6c514b4c821315'
                        key: {
                            name: 'x_agri_hire_machinery_catalog'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8d53e35f91bf4beeba84a58be38c763a'
                        key: {
                            name: 'x_agri_hire_machinery_catalog'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8dd5810d330a491395b84db6c1acf736'
                        key: {
                            name: 'x_agri_hire_hire_request'
                            element: 'drone_image_analyzed'
                            value: 'not_uploaded'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '8e83ceef7b304cd2b8a1f87246ac2d06'
                        key: {
                            sys_security_acl: 'be7d7d86968043f4bd882ab54e21f044'
                            sys_user_role: {
                                id: '1f0d2f2a60044cb0b4747ae62143875c'
                                key: {
                                    name: 'x_agri_hire.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '908ab52be7cb40ac852e96fb09995a10'
                        key: {
                            name: 'x_agri_hire_hire_request'
                            element: 'machinery_name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '90a09ea38ef14a30a8755c6514956e3c'
                        key: {
                            name: 'x_agri_hire_farmer'
                            element: 'phone_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '980bcfcbafe84acf8c699d875291149b'
                        key: {
                            name: 'x_agri_hire_machinery_catalog'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9a4e4a24a5df4fc99163e70e0ebc659b'
                        key: {
                            name: 'x_agri_hire_machinery_catalog'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9a4f818de482451a8368033b05563958'
                        key: {
                            name: 'x_agri_hire_farmer'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '9d0f428e9bd94eb38856b341da52fdb3'
                        key: {
                            name: 'x_agri_hire_hire_request'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9ed2f715083242879a6e01b77c65cd39'
                        key: {
                            name: 'x_agri_hire_machinery_catalog'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a2ec4b25613c454db0dc93924cd7b4e3'
                        key: {
                            name: 'x_agri_hire_farmer'
                            element: 'phone_number'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a5a0c6dce808490580d48e82cc899b48'
                        key: {
                            name: 'x_agri_hire_hire_request'
                            element: 'machinery_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a6caa825704a49a28cfa40f27af52549'
                        key: {
                            name: 'x_agri_hire_hire_request'
                            element: 'end_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a72b6da55e784a10b3c8161881b93cca'
                        key: {
                            name: 'x_agri_hire_machinery_catalog'
                            element: 'available_units'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a83bfc23faa74c85a7165b1bf5b5fe35'
                        key: {
                            name: 'x_agri_hire_hire_request'
                            element: 'machinery_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: 'aa296608b5a54b45b6c9670d36e33b54'
                        key: {
                            category: 'x_agri_hire_hire_request'
                            prefix: 'HIRE'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'abd71f02f713463b85035d3b088b2188'
                        key: {
                            name: 'x_agri_hire_machinery_catalog'
                            element: 'name'
                            value: 'plough'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b48e389dd785426c988079af002047a9'
                        key: {
                            name: 'x_agri_hire_machinery_catalog'
                            element: 'name'
                            value: 'rotavator'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bca8e69a6ee84ba188f29eba7a56407f'
                        key: {
                            name: 'x_agri_hire_hire_request'
                            element: 'fertilizer_areas'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'bccc311b1efa4f26b855eea7708fcc36'
                        key: {
                            sys_security_acl: 'adbddbb00beb4f7085f0eb3e43d00b39'
                            sys_user_role: {
                                id: '1f0d2f2a60044cb0b4747ae62143875c'
                                key: {
                                    name: 'x_agri_hire.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'beaa556fada34bdab7bd52d57f7fbbea'
                        key: {
                            name: 'x_agri_hire_hire_request'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c25015fcaf58436ebdfa6503c0579867'
                        key: {
                            name: 'x_agri_hire_machinery_catalog'
                            element: 'name'
                            value: 'sprayer'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c59b88ff8d2a46df878ad3b03dddf35b'
                        key: {
                            name: 'x_agri_hire_hire_request'
                            element: 'farmer'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c7dabbcb58f240a7beadfdfd7356b857'
                        key: {
                            name: 'x_agri_hire_farmer'
                            element: 'district'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cce34597fefe43d289e85a04593634d6'
                        key: {
                            name: 'x_agri_hire_farmer'
                            element: 'email'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cd515e619a494a8f9ca51af56ff47b88'
                        key: {
                            name: 'x_agri_hire_machinery_catalog'
                            element: 'total_units'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ce16ba548b71403e84581e96d1fa5b82'
                        key: {
                            sys_security_acl: 'e1053234027246a5bc00bacf59956433'
                            sys_user_role: {
                                id: '8b52c17ff26141cf9b90fa7d30ea1f42'
                                key: {
                                    name: 'x_agri_hire.farmer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd77f18b2e2d141388f03eba85bbf2b15'
                        key: {
                            name: 'x_agri_hire_machinery_catalog'
                            element: 'total_units'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd84efc65c4a2447e9afc50484e23a50a'
                        key: {
                            name: 'x_agri_hire_hire_request'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'dab2802b215b43acaf7c1749435e0b1c'
                        key: {
                            name: 'x_agri_hire_machinery_catalog'
                            element: 'name'
                            value: 'water_pump'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'dc1cf3b3d9b34578844412731d172ea2'
                        key: {
                            name: 'x_agri_hire_hire_request'
                            element: 'drone_image_analyzed'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ddce204bc0164bfabdcea4581f6e22aa'
                        key: {
                            name: 'x_agri_hire_hire_request'
                            element: 'fertilizer_areas'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e21890072a9142dfafe168667394c411'
                        key: {
                            name: 'x_agri_hire_machinery_catalog'
                            element: 'name'
                            value: 'harvester'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e3966ee84380474fb2308699f5a75644'
                        key: {
                            name: 'x_agri_hire_hire_request'
                            element: 'health_score'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'e3dd62ff3f1c44199372aadcd41a9574'
                        key: {
                            name: 'x_agri_hire_farmer'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f1ee8521772c4e77a819c176f9c27d54'
                        key: {
                            name: 'x_agri_hire_hire_request'
                            element: 'status'
                            value: 'pending'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'fc41da68f6f44594b9f6cda48978b07e'
                        key: {
                            name: 'x_agri_hire_hire_request'
                            element: 'drone_image_analyzed'
                            value: 'failed'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'fd66104ff44346238b70ac580e4bc4fd'
                        key: {
                            name: 'x_agri_hire_machinery_catalog'
                            element: 'name'
                            value: 'tractor'
                        }
                    },
                    {
                        table: 'par_dashboard_permission'
                        id: 'fd7994bf8d7c43a29c49bba47563237b'
                        key: {
                            dashboard: '2709774e94b64a748b9857f1d12192ee'
                            user: 'NULL'
                            group: 'NULL'
                            role: 'x_agri_hire.admin'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'fdab0841b72f4ad2acf61750a8210ffa'
                        key: {
                            name: 'x_agri_hire_hire_request'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'fefb4161f0384d2b976c5553d5a4930a'
                        key: {
                            sys_security_acl: '3d3a9312384642d28ecd180a5b2131c1'
                            sys_user_role: {
                                id: '1f0d2f2a60044cb0b4747ae62143875c'
                                key: {
                                    name: 'x_agri_hire.admin'
                                }
                            }
                        }
                    },
                ]
            }
        }
    }
}
