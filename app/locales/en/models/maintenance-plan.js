export default {
  projections: {
    ПланТОE: {
      startDate: {
        __caption__: 'startDate'
      },
      endDate: {
        __caption__: 'endDate'
      },
      equipment: {
        __caption__: 'equipment',
        name: {
          __caption__: 'name'
        },
        model: {
          __caption__: 'model',
          name: {
            __caption__: 'name'
          }
        },
        type: {
          __caption__: 'type',
          name: {
            __caption__: 'name'
          }
        },
        status: {
          __caption__: 'status',
          name: {
            __caption__: 'name'
          }
        },
        accountable: {
          __caption__: 'accountable',
          surname: {
            __caption__: 'surname'
          }
        },
        serviceContract: {
          __caption__: 'serviceContract',
          number: {
            __caption__: 'number'
          }
        },
        location: {
          __caption__: 'location',
          name: {
            __caption__: 'name'
          }
        }
      },
      scheduledMaintenanceOperation: {
        __caption__: 'scheduledMaintenanceOperation',
        executionDate: {
          __caption__: 'executionDate'
        },
        maintenanceOperation: {
          __caption__: 'maintenanceOperation',
          name: {
            __caption__: 'name'
          }
        }
      }
    },
    ПланТОL: {
      startDate: {
        __caption__: 'startDate'
      },
      endDate: {
        __caption__: 'endDate'
      },
      equipment: {
        __caption__: 'equipment',
        name: {
          __caption__: 'name'
        },
        model: {
          __caption__: 'model',
          name: {
            __caption__: 'name'
          },
          manufacturer: {
            __caption__: 'manufacturer',
            name: {
              __caption__: 'name'
            }
          }
        }
      }
    }
  },
  validations: {
    startDate: {
      __caption__: 'startDate'
    },
    endDate: {
      __caption__: 'endDate'
    },
    equipment: {
      __caption__: 'equipment'
    },
    scheduledMaintenanceOperation: {
      __caption__: 'scheduledMaintenanceOperation'
    }
  }
};
