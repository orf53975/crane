(function () {
    'use strict';
    angular.module('app.utils')
        .config(i18nEn);

    /* @ngInject */
    function i18nEn($translateProvider) {
        $translateProvider.translations('en-US', {
            //general
            "Create Time": 'Create Time',
            "Update Time": 'Update Time',
            "Operation": 'Operation',
            "Update": 'Update',
            "Real Monitoring": 'Real Monitoring',
            "Log": 'Log',
            "Detail": 'Detail',
            "Container": 'Container',
            "Status": "Status",
            "Driver": "Driver",
            "Can not be empty": "can not be empty",
            "Only number and letter": "name only can be number and letter",
            "Next": "Next",
            "Previous": "Previous",
            "Cancel": "Cancel",
            "Done": "Done",
            "YES": "YES",
            "NO": "NO",
            "ID": "ID",
            "Labels": "Labels",
            "Created": "Created",
            "Local": "Local",
            "Version": "Version",
            "Name": "Name",
            "Service": "Service",
            "Task": "Task",
            "Basic Information": 'Basic Information',
            "Not configured": 'Not configured',
            "No information": 'No information',
            "Core": 'Core',
            "Memory": 'Memory',
            "Second": 'second',
            "Environment": 'Environment Variables',
            "Confirm": 'Confirm',
            "Connect": 'Connect',
            "Add Host label": 'Add Host label',
            "System": "System",
            "Configuration": "Configuration",
            "unknown": "unknown",
            "More Actions": "More Actions",
            "Delete": "Delete",
            "Failure": "Failure",
            "Exit": "Exit",
            "KEY must be numbers, letters or underscore": "KEY must be numbers, letters or underscore",
            "KEY can not be repeated": "KEY can not be repeated",
            "KEY can not contain Chinese": "KEY can not contain Chinese",
            "Value can not contain Chinese": "Value can not contain Chinese",
            "Competence": "Competence",
            "Must be letter or digit": "Must be letter or digit",
            "Name can not be empty": "Name can not be empty",
            "Read-only": "Read-only",
            "Read-Write": "Read-Write",
            "Empty": "Empty",
            "Options": "Options",
            "Deploy": "Deploy",
            "Read from a file": "Read from a file",
            "No details": "No details",
            "Username": "Username",
            "Password": "Password",
            "Password can not be empty": "Password can not be empty",
            "Passwords do not match": "Passwords do not match",
            "Confirm password again": "Confirm password again",
            "Username can not be empty": "Username can not be empty",


            //index module
            "LOGOUT": 'Logout',
            "Stack": 'Project',
            "Image": 'Image',
            "Facility": 'Facility',
            "Node": 'Node',
            "Network": 'Network',
            "Warehouse certification": 'Warehouse certification',
            "Information": 'Information',
            "Activation": 'Activation',
            "Just try to lose something ...": 'Just try to lose something...',
            "No query to the relevant information ...": 'No query to the relevant information ...',
            "License will be expired": 'Your serial number is about to expire , please fill in the information to obtain a new serial number.',

            //stack module
            "Stack List": 'Stack List',
            "Create Project": 'Create Project',
            "Service Update": 'Service Update',
            "Project Detail": 'Project Detail',
            "Service Detail": 'Service Detail',
            "Choose the way to create": 'Choose the way to create',
            "Create of DAB": 'DAB',
            "Create of Form": 'Guide',
            "Create of Shortcut": 'Shortcut',
            "Delete Project": 'Delete Project',
            "Add to template": 'Add to template',
            "Service List": 'Service List',
            "Service Name": 'Service Name',
            "Task Number": 'Task Number',
            "Running/Total": 'Running/Total',
            "Service Scale": 'Service Scale',
            "Modal title for delete stack": 'The project will not be able to recover after deletion, confirm to be deleted?',
            "Task List": 'Task List',
            "Discovery": 'Discovery',
            "CICD": 'CICD',
            "TaskId": 'Task Id',
            "Task State": 'Task State',
            "Abnormal": 'Abnormal',
            "Task_state_new": 'new',
            "Task_state_allocated": 'allocated',
            "Task_state_pending": 'pending',
            "Task_state_assigned": 'assigned',
            "Task_state_accepted": 'accepted',
            "Task_state_preparing": 'preparing',
            "Task_state_ready": 'ready',
            "Task_state_starting": 'starting',
            "Task_state_running": 'running',
            "Task_state_complete": 'complete',
            "Task_state_shutdown": 'shutdown',
            "Task_state_failed": 'failed',
            "Task_state_rejected": 'rejected',
            "Image Permissions": 'Image Permissions',
            "A host of a task": 'A host of a task',
            "StopGracePeriod": 'StopGracePeriod',
            "StopGracePeriod Tooltip": 'The container will be forced to kill after the tolerance time',
            "Container Dir": 'Container Dir',
            "Resources Limits": 'Resource limits for each task',
            "Reservations": 'Set aside resources for each task',
            "Fault Tolerant": 'Fault Tolerant',
            "RestartPolicy": 'Restart Policy',
            "Task_restart_policy_none": 'none',
            "Task_restart_policy_any": 'any',
            "Task_restart_policy_on_failure": 'on-failure',
            "Delay": 'Restart interval',
            "Window": 'Evaluation interval',
            "MaxAttempts": 'Max Attempts',
            "Rollover": 'Rollover',
            "FailureAction": 'Update failed policy',
            "Update Policy": 'Update Policy',
            "Keep trying": 'Keep trying',
            "Stop trying": 'Stop trying',
            "Interval": 'Interval',
            "Number of parallel": 'Number of parallel',
            "Service Labels": 'Service Labels',
            "Add Service Labels": 'Add Service Labels',
            "Add Container Labels": 'Add Container Labels',
            "Add Port Mapping": 'Add Port Mapping',
            "Adding Environment Variables": 'Adding Environment Variables',
            "Add constraints": 'Add constraints',
            "Add storage": 'Add storage',
            "Memory at least 4MB": "memory at least 4MB",
            "Set name for project": "The first step in. Give your project a name",
            "Fill in the service information": "The second step. Fill in the service information",
            "Project Name": "Project Name",
            "New Service": "New Service",
            "Service Mode": "Service Mode",
            "Select Network": "Select Network",
            "Not be modified": "Not be modified",
            "Warehouse certification mark": "Warehouse certification mark",
            "Container working directory": "Container working directory",
            "Command": "Command",
            "Fixed number": "Fixed number",
            "A node in a task": "A node in a task",
            "Startup Parameters": "Startup Parameters",
            "Resource limit": "Resource limit",
            "Resource limits for each task": "Resource limits for each task",
            "Set aside resources for each task": "Set aside resources for each task",
            "Restart Policy": "Restart Policy",
            "Do not restart": "Don't restart",
            "After a failed policy": "After a failed policy",
            "Immediately stop": "Immediately stop",
            "Scheduling Policy": "Scheduling Policy",
            "File mount": "File mount",
            "Host port": "Host port",
            "Maximum host port can not exceed 65535": "Maximum host port can not exceed 65535",
            "Host path": "Host path",
            "Limitation factor": "Limitation factor",
            "Service name can not be repeated": "Service name can not be repeated",
            "Mirroring can not be empty": "Mirroring can not be empty",
            "Command can not contain Chinese": "Command can not contain Chinese",
            "Args can not contain Chinese": "Args can not contain Chinese",
            "CPU minimum 0.01": "CPU minimum 0.01",
            "Maximum service port can not exceed 65535": "Maximum service port can not exceed 65535",
            "Minimum service port 1": "Minimum service port 1",
            "Deployment and export": "Deployment and export",
            "Continue Add": "Continue Add",
            "Delete Service": "Delete Service",


            // node module
            "Summary": "Summary",
            "Hostname": "Hostname",
            "Network Mode": "Network Mode",
            "Network Name": "Network Name",
            "HostnamePath": "Hostname Path",
            "HostsPath": "Hosts Path",
            "LogPath": "Log Path",
            "ResolvConfPath": "ResolvConf Path",
            "Port Mapping": "Port Mapping",
            "Port": "Port",
            "Protocol": "Protocol",
            "Network Configuration": "Network Config",
            "Gateway": "Gateway",
            "Gateway illegal": "gateway illegal",
            "IP Address": "IP Address",
            "MAC Address": "MAC Address",
            "Gateway IP": "Gateway IP",
            "Container labels": "Container Labels",
            "Volume": "Volume",
            "Path": "Path",
            "Start Command": "Command",
            "Image Name": "Image",
            "Change": "Changed",
            "Terminal": "Terminal",
            "Change mode": "Change Mode",
            "File Path": "File Path",
            "No information about the changes": "no information about the changes",
            "No log information": "no log information",
            "IP address format error": "IP address format error",
            "Host IP": "Host IP",
            "IP range": "IP Range",
            "IP range illegal": "IP range illegal",
            "Install Docker": "1. Install Docker",
            "Docker intalled": "if Docker was installed, please skip。",
            "Copy code": "Click To Copy",
            "Add host command": "2. Command of add host",
            "Exec add host cmd": "Please sign the target host，run the following command，This operation requires sudo privileges.",
            "Create host nerwork": "Create Host Nerwork",
            "Subnet Mask": "Subnet Mask",
            "Subnet Mask illegal": "subnet mask illegal",
            "Internal Network": "Internal Network",
            "Can add multiple labels": "Can add multiple labels",
            "Add labels": "Add Labels",
            "Labels key can not contain Chinese": "labels key can not contain Chinese",
            "Labels key can not repeat": "labels key can not repeat",
            "Labels value can not contain Chinese": "labels value can not contain Chinese",
            "Add volume": "Add Volume",
            "Volume name": "Volume Name",
            "Docker info": "Docker Info",
            "Volume driver": "Volume Driver",
            "Volume dir": "Volume Dir",
            "Debug model": "Debug Mode",
            "Cgroup driver": "Cgroup Driver",
            "Allows memory overflow": "Allows memory overflow",
            "Host information": "Host Information",
            "Kernel version": "Kernel Version",
            "System time": "System Time",
            "Internal address": "Internal Address",
            "Status and operation hours": "Status/operation hours",
            "Remove": "Remove",
            "Kill": "Kill",
            "Running containers": "Running Containers",
            "Total containers": "Total Containers",
            "Pasued containers": "Pasued Containers",
            "Stopped containers": "Stopped Containers",
            "Images": "Images",
            "Host labels": "Host Labels",
            "Created volume": "Created Volume",
            "Size": "Size",
            "Remove image": "Remove Image",
            "Container number": "Container Number",
            "Remove network": "Remove Network",
            "Mount points": "Mount Points",
            "Remove volume": "Remove Volume",
            "Vol_driver_local": "local",
            "Node List": "Node List",
            "Add Node": "Add Node",
            "Node Detail": "Node Detail",
            "Image Detail": "Image Detail",
            "Container Detail": "Container Detail",
            "Volume Detail": "Volume Detail",
            "Role": "Role",
            "Availability": "Availability",
            "Connect host": "Connect host",
            "Connect host note": "Edit Connection host Docker Daemon address",
            "Edit label": "Edit label",
            "Edit label tooltip": "Edit the host label",
            "Stop scheduling": "Stop scheduling",
            "Stop scheduling tooltip": "After stopping a scheduled task on that host will be assigned to other hosts , new tasks can not be allocated to the host",
            "Restore scheduling": "Restore scheduling",
            "Restore scheduling tooltip": "Recovery tasks on this host free scheduling",
            "Pause scheduling": "Pause scheduling",
            "Pause scheduling tooltip": "After a pause dispatching a new task will no longer be assigned to the host, but the task has been released to the host will not be affected",
            "Delete host": "Delete host",
            "Delete host tooltip": "To remove a host , noted that only the state is Down host can be deleted",
            "Node_role_worker": "worker",
            "Node_role_manager": "manager",
            "Node_availability_drain": "Stop scheduling",
            "Node_availability_active": "Normal scheduling",
            "Node_availability_pause": "Pause Scheduling",
            "Node_state_unknown": "unknown",
            "Node_state_down": "down",
            "Node_state_ready": "ready",
            "Node_state_disconnected": "disconnected",
            "The number of tasks": "Number of tasks",
            "Need Docker TCP Socket Addrs": "It requires a host of Docker TCP Socket address",
            "Provide Docker TCP Socket Addrs": "Please provide the host Docker Daemon 's TCP Socket address.",
            "Open Docker TCP Socket Service": "To get more details, host information, you need to open Docker Daemon TCP Socket service on that host.",
            "Docker TCP Socket Addrs": "Docker TCP Socket Address",
            "Address can not be empty": "Address can not be empty",
            "How to configure Docker Daemon Socket Addrs": "How to configure the TCP Socket Docker Daemon address ?",
            "Edit the docker.service file": "Edit the file/usr/lib/systemd/system/docker.service, Set up",
            "Edit the docker file": "Edit the /etc/default/docker , Set up",
            "Save and Run Command": "Save and Run Command",
            "Are you sure that host offline ?": "Are you sure that host offline ？",
            "Are you sure to activate the host ?": "Are you sure to activate the host ?",
            "Are you sure to delete this host ?": "Are you sure to delete this host ？",
            "Are you sure the host is suspended ?": "Are you sure the host is suspended ？",
            "Are you sure to delete the storage volume ?": "Are you sure to delete the storage volume ?",
            "Are you sure to delete the image ?": "Are you sure to delete the image ？",
            "Are you sure to remove the container ?": "Are you sure to remove the container ？",
            "Are you sure to kill the container ?": "Are you sure to kill the container ?",
            "Image size": "Image size",
            "Layer": "Layer",
            "Docker Version": "Docker Version",
            "Architecture": "Architecture",
            "Container hostname": "Container hostname",
            "No query information about the changes": "No query information about the changes",
            "Container_status_labels_running": "running",
            "Container_status_labels_paused": "paused",
            "Container_status_labels_dead": "dead",
            "Container_status_labels_restarting": "restarting",
            "Container_status_labels_created": "created",
            "Container_status_labels_exited": "exited",
            "Docker storage directory": "Docker storage directory",
            "Diff_kind_0": "modify",
            "Diff_kind_1": "add",
            "Diff_kind_2": "delete",


            //registry-auth module
            "Registry auth list": "Registry Auth List",
            "Add registry auth": "Add Registry Auth",
            "Certification mark": "Certification mark",
            "Are you sure to delete this certificate ?": "Are you sure to delete this certificate ?",

            //registry module
            "Schema Version": "Schema Version",
            "Image List": "Image List",
            "Project Deployment": "Project Deployment",
            "Creating project templates": "Creating project templates",
            "Update project templates": "Update project templates",
            "How to create a mirror": "How to create a mirror",
            "Project Templates": "Project Templates",
            "Public Mirror": "Public Mirror",
            "My Mirror": "My Mirror",
            "New Project Template": "New Project Template",
            "Project description": "Project description",
            "Are you sure to remove the mirror ?": "Are you sure to remove the mirror ？",
            "Are you sure to delete the project template ?": "Are you sure to delete the project template ?",

            //network module
            "Network List": "Network List",
            "Type": "Type",
            "Create Network": "Create Network",
            "Network Detail": "Network Detail",
            "Scope": "Scope",
            "Support IPv6": "Support IPv6",
            "Only the internal network": "Only the internal network",
            "Address Management": "Address Management",
            "Connections container": "Connections container",
            "Container Name": "Container Name",
            "IPv4 address": "IPv4 address",
            "IPv6 address": "IPv6 address",
            "No query information to a network": "No query information to a network",
            "Are you sure to delete the network ?": "Are you sure to delete the network ?",

            //misc module
            "Cluster Name": "Cluster Name",
            "Token management node": "Token management node",
            "Working node Token": "Working node Token",
            "Cluster Information": "Cluster Information",

            //Notification
            "Host successful update": "Host successful update",
            "Successfully deleted": "Successfully deleted",
            "Kill Success": "Kill Success",
            "Success offline": "Success offline",
            "Activation successful": "Activation successful",
            "Host successfully deleted": "Host successfully deleted",
            "Pause success": "Pause success",
            "Creating Success": "Creating Success",
            "Update Success": "Update Success",
            "Modify the number of tasks successfully": "Modify the number of tasks successfully",
            "The project began to deploy , the deployment time-dependent mirror pull time , please wait": "The project began to deploy , the deployment time-dependent mirror pull time , please wait",
            
             //error code
            "CODE_MESSAGE_10000": "Service busy, please try again later",
            "CODE_MESSAGE_10001": "Service busy, please try again later",
            "CODE_MESSAGE_10002": "Parameter error",
            "CODE_MESSAGE_11001": "Get container list parameter error",
            "CODE_MESSAGE_11002": "Update container parameter error",
            "CODE_MESSAGE_11003": "Error update container operation",
            "CODE_MESSAGE_11004": "Remove container parameter error",
            "CODE_MESSAGE_11005": "Error remove container operation",
            "CODE_MESSAGE_11006": "Specifies container was not found",
            "CODE_MESSAGE_11007": "Specifies container was already running",
            "CODE_MESSAGE_11008": "Specifies container was need running",
            "CODE_MESSAGE_11009": "Invalid image name",
            "CODE_MESSAGE_11101": "Get image list parameter error",
            "CODE_MESSAGE_11201": "Connect to specifiles network parameter error",
            "CODE_MESSAGE_11202": "Unsupported network connections Operation",
            "CODE_MESSAGE_11203": "Create network parameter error",
            "CODE_MESSAGE_11204": "Inspect specifies network parameter error",
            "CODE_MESSAGE_11205": "Get network list parameter error",
            "CODE_MESSAGE_11206": "Network operating system can not be built",
            "CODE_MESSAGE_11207": "Specifies network was not found",
            "CODE_MESSAGE_11208": "Specifies container/network was not found",
            "CODE_MESSAGE_11209": "Create network failed, invalid network name",
            "CODE_MESSAGE_11301": "Update node parameter error",
            "CODE_MESSAGE_11302": "Unsupported node connections Operation",
            "CODE_MESSAGE_11303": "Invalid node role",
            "CODE_MESSAGE_11304": "Invalid node availability",
            "CODE_MESSAGE_11305": "Get node info failed",
            "CODE_MESSAGE_11401": "Update service parameter error",
            "CODE_MESSAGE_11402": "Create service parameter error",
            "CODE_MESSAGE_11403": "Scale service parameter error",
            "CODE_MESSAGE_11404": "Invalid CPU parameter of service",
            "CODE_MESSAGE_11405": "Invalid delay parameter of service",
            "CODE_MESSAGE_11406": "Invalid window parameter of service",
            "CODE_MESSAGE_11407": "Invalid terminal parameter of service",
            "CODE_MESSAGE_11408": "Invalid depoly parameter of service",
            "CODE_MESSAGE_11409": "Invalid memory parameter of service",
            "CODE_MESSAGE_11410": "Invalid update parameter of service",
            "CODE_MESSAGE_11411": "Parameter of service can not empty",
            "CODE_MESSAGE_11412": "Invalid service name",
            "CODE_MESSAGE_11413": "Service port conflict",
            "CODE_MESSAGE_11501": "Create stack parameter error",
            "CODE_MESSAGE_11502": "Create stack failed, invalid stack name",
            "CODE_MESSAGE_11601": "Create volume parameter error",
            "CODE_MESSAGE_11602": "Create volume failed, invalid volume name",
            "CODE_MESSAGE_11701": "Connected to the specified node fails",
            "CODE_MESSAGE_11702": "Connected to the specified node fails, empty endpoint",
            "CODE_MESSAGE_11703": "Endpoint and node ID does not match the specified node",
            "CODE_MESSAGE_11704": "Connected to the specified node fails, error endpoint",
            "CODE_MESSAGE_11901": "Get config failed",
            "CODE_MESSAGE_12001": "Invalid user group",
            "CODE_MESSAGE_12002": "Create user parameter error",
            "CODE_MESSAGE_12003": "Failed to add user permissions",
            "CODE_MESSAGE_12004": "Gets the specified user failed",
            "CODE_MESSAGE_12005": "Specifies the user was not found",
            "CODE_MESSAGE_12006": "Login parameter error",
            "CODE_MESSAGE_12007": "Login failed",
            "CODE_MESSAGE_12008": "Sign failure",
            "CODE_MESSAGE_12009": "Error user group",
            "CODE_MESSAGE_12010": "User not found within a specified group of users",
            "CODE_MESSAGE_12011": "Invalid user id",
            "CODE_MESSAGE_12012": "Specifies the user group is not found",
            "CODE_MESSAGE_12013": "Invalid user group id",
            "CODE_MESSAGE_12014": "Specifies the user group was not found",
            "CODE_MESSAGE_12015": "Failed to get user group list",
            "CODE_MESSAGE_12016": "Users do not have permission to modify",
            "CODE_MESSAGE_12017": "Creating user groups Parameter error",
            "CODE_MESSAGE_12018": "Failed to create user group",
            "CODE_MESSAGE_12019": "Update user group parameter error",
            "CODE_MESSAGE_12020": "Failed to update user group",
            "CODE_MESSAGE_12021": "Failed to remove user group, invalid user group id",
            "CODE_MESSAGE_12022": "Failed to remove user group",
            "CODE_MESSAGE_12023": "Failed to join user group, invalid user group id",
            "CODE_MESSAGE_12024": "Failed to join user group, invalid user id",
            "CODE_MESSAGE_12025": "Failed to join user group",
            "CODE_MESSAGE_12026": "Failed to leave user group, invalid user group id",
            "CODE_MESSAGE_12027": "Failed to leave user group, invalid user id",
            "CODE_MESSAGE_12028": "Failed to leave user group",
            "CODE_MESSAGE_12029": "Add service access failure",
            "CODE_MESSAGE_12030": "Add service access failure",
            "CODE_MESSAGE_12031": "Remove service access failure, invalid query key",
            "CODE_MESSAGE_12032": "Remove service access failure",
            "CODE_MESSAGE_13001": "Error search key word",
            "CODE_MESSAGE_14001": "Get registry config error",
            "CODE_MESSAGE_14002": "Get registry config failed, error parameter",
            "CODE_MESSAGE_14003": "Remove registry config failed",
            "CODE_MESSAGE_14004": "Failed to publish registry, parameter error",
            "CODE_MESSAGE_14005": "Failed to publish registry, update parameter error",
            "CODE_MESSAGE_14006": "Get registry stack template error",
            "CODE_MESSAGE_15031": "Get stack template list error",
            "CODE_MESSAGE_15032": "Get stack template error",
            "CODE_MESSAGE_15033": "Invalid user",
            "CODE_MESSAGE_15034": "Invalid stacj template",
            "CODE_MESSAGE_15035": "Invalid request parameter",
            "CODE_MESSAGE_15036": "Invalid image, please try another one",
            "CODE_MESSAGE_15037": "Remove stack template failed",
            "CODE_MESSAGE_15038": "Ban stack template failed",
            "CODE_MESSAGE_15039": "Update stack template failed",
            "CODE_MESSAGE_15040": "Create stack template failed",
            "CODE_MESSAGE_16001": "Get license failed",
            "CODE_MESSAGE_16002": "Acticate license failed",
            "CODE_MESSAGE_16003": "No license, please activate",
            "CODE_MESSAGE_17001": "Create registryauth parameter error",
            "CODE_MESSAGE_17002": "Registryauth is already exist",
            "CODE_MESSAGE_17003": "Remove registryauth parameter error",
            "CODE_MESSAGE_17004": "Invalid user",
        });
    }
})();
