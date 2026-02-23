/**
 * ═══════════════════════════════════════════════════════════════
 *  BZ55 FITNESS CONCEPT · CONFIGURACIÓN CENTRAL
 *  Este archivo se define UNA SOLA VEZ y no se toca más
 *  salvo que cambien las reglas de negocio o se añada un centro
 * ═══════════════════════════════════════════════════════════════
 */

const BZ55_CONFIG = {

  // ─────────────────────────────────────────────────────────────
  //  CENTROS DE LA RED
  //  Añade un nuevo objeto aquí cuando se incorpore un centro
  // ─────────────────────────────────────────────────────────────
  centros: [
    {
      id: 'JR',
      nombre: 'Julián Romea',
      ciudad: 'Madrid',
      color: '#6c63ff',
      objetivo_clientes: 150,
      estado: 'estable',           // 'estable' | 'rescate' | 'nuevo'
      apertura: 'Octubre 2024',
      destinatarios: {
        email: '',                 // ej: 'propietario@jr.com'
        whatsapp: '',              // ej: '+34600000000'
      },
    },
    {
      id: 'LDH',
      nombre: 'López de Hoyos',
      ciudad: 'Madrid',
      color: '#f5c842',
      objetivo_clientes: 150,
      estado: 'rescate',
      apertura: 'Noviembre 2025',
      destinatarios: {
        email: '',
        whatsapp: '',
      },
    },
    // Descomenta y rellena cuando se añada el próximo centro:
    // {
    //   id: 'C3',
    //   nombre: 'Nombre Centro',
    //   ciudad: 'Ciudad',
    //   color: '#00e8a2',
    //   objetivo_clientes: 150,
    //   estado: 'nuevo',
    //   apertura: 'Mes Año',
    //   destinatarios: { email: '', whatsapp: '' },
    // },
  ],

  // ─────────────────────────────────────────────────────────────
  //  COLUMNAS DEL EXCEL
  //  Si el ERP cambia algún nombre de columna, solo toca aquí
  // ─────────────────────────────────────────────────────────────
  columnas: {
    cliente_id:     'Cliente (ID)',
    servicio:       'Elemento2',
    importe:        'Total sin IVA',
    anyo:           'Año',
    mes:            'Mes',
    factura_fecha:  'Factura',
    centro_id:      null,   // Si el Excel lleva columna de centro, ponla aquí
  },

  // ─────────────────────────────────────────────────────────────
  //  SERVICIOS VÁLIDOS PARA CLIENTES ACTIVOS Y CUOTA MEDIA
  //  También son la base para calcular altas y bajas
  // ─────────────────────────────────────────────────────────────
  servicios_validos: new Set([
    '1 SESIÓN SEMANA - S.GENERAL',
    '1 SESIÓN SEMANA FOUNDERS',
    '2 SESIONES SEMANA - S.GENERAL',
    '2 SESIONES SEMANA FOUNDERS',
    '3 SESIONES SEMANA - S.GENERAL',
    '3 SESIONES SEMANA FOUNDERS',
    'BONO 4 SESIONES - S.GENERAL',
    'BONO 4 SESIONES FOUNDERS',
    'BONO 8 SESIONES FOUNDERS',
    'SESIÓN INDIVIDUAL 1:1',
    '1 SESIÓN SEMANAL / MES',
    '1 SESIÓN SEMANAL / MES ANIVERSARIO',
    '1 SESIÓN SEMANAL / MES FOUNDERS',
    '2 SESIONES SEMANALES / MES',
    '2 SESIONES SEMANALES / MES ANIVERSARIO',
    '2 SESIONES SEMANALES / MES FOUNDERS',
    '3 SESIONES SEMANALES / MES',
    '3 SESIONES SEMANALES / MES ANIVERSARIO',
    '3 SESIONES SEMANALES / MES FOUNDERS',
    'BONO 2 SESIONES',
    'BONO 4 SESIONES',
    'BONO 4 SESIONES / MES',
    'BONO 4 SESIONES / MES ANIVERSARIO',
    'BONO 4 SESIONES / MES FOUNDERS',
    'BONO 8 SESIONES',
    'BONO 8 SESIONES / MES',
    'BONO 8 SESIONES / MES ANIVERSARIO',
    'BONO 8 SESIONES / MES FOUNDERS',
    'E.P. 2:1 BONO 12 SESIONES (CADUCIDAD: 2 MESES)',
    'E.P. 2:1 BONO 4 SESIONES (CADUCIDAD: 1 MES)',
    'E.P. 2:1 BONO 8 SESIONES (CADUCIDAD: 2 MESES)',
    'EVERY DAY / (1 DIARIA)',
    'EVERY DAY / (1 DIARIA) ANIVERSARIO',
    'EVERY DAY / (1 DIARIA) FOUNDERS',
    'TARIFA ANIVERSARIO',
    'TARIFAS FOUNDERS',
  ]),

  // ─────────────────────────────────────────────────────────────
  //  SESIONES DE PRUEBA
  //  Cuentan para ratio de cierre pero NO como clientes activos
  // ─────────────────────────────────────────────────────────────
  servicios_prueba: new Set([
    'SESIÓN DE PRUEBA',
    '1 SESIÓN DE PRUEBA',
  ]),

  // ─────────────────────────────────────────────────────────────
  //  SERVICIOS EXCLUIDOS DE CLIENTES
  //  Solo cuentan para facturación total
  // ─────────────────────────────────────────────────────────────
  servicios_excluidos: new Set([
    'CALCETINES ANTIDESLIZANTES 36-41',
    'CALCETINES ANTIDESLIZANTES BZ55 GRISES',
    'SESIÓN INDIVIDUAL GRUPO',
    '1 SESIÓN INDIVIDUAL EN GRUPO',
    'ALQUILER TOALLA DUCHA',
    'BOTELLA ALUMINIO AZUL',
    'BOTELLA ALUMINIO FUCSIA',
    'BOTELLA ALUMINIO PLATA',
    'CAJA REGALO',
    'CALCETINES ANTIDESLIZANTES 41-46',
    'CALCETINES ANTIDESLIZANTES BZ55 - BLANCO',
    'CALCETINES ANTIDESLIZANTES BZ55 - GRIS',
    'GRUPOS REDUCIDOS',
    'SESIÓN PAREJA ENTRENO PERSONAL',
    'SUMMER PACK',
    'TOTE BAG',
  ]),

  // ─────────────────────────────────────────────────────────────
  //  NOMBRES DE MESES EN ESPAÑOL
  // ─────────────────────────────────────────────────────────────
  meses: ['','Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
};
