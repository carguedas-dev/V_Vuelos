/****** Object:  Table [dbo].[Aerolinea]    Script Date: 8/13/2022 6:13:03 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Aerolinea](
	[id] [varchar](10) NOT NULL,
	[nombre] [varchar](60) NOT NULL,
	[Imagen] [varchar](max) NOT NULL,
	[pais] [varchar](25) NULL,
 CONSTRAINT [PK_Aerolinea] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Bitacora]    Script Date: 8/13/2022 6:13:03 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Bitacora](
	[id] [decimal](12, 0) IDENTITY(1,1) NOT NULL,
	[fecha] [date] NOT NULL,
	[hora] [varchar](900) NOT NULL,
	[registro_detalle] [varchar](900) NOT NULL,
	[usuario] [varchar](40) NOT NULL,
	[operacion] [decimal](2, 0) NOT NULL,
	[descripcion] [varchar](max) NOT NULL,
 CONSTRAINT [PK_Bitacora] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Boleto]    Script Date: 8/13/2022 6:13:03 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Boleto](
	[id] [varchar](10) NOT NULL,
	[forma_pago] [decimal](2, 0) NOT NULL,
	[tipo_transaccion] [decimal](2, 0) NOT NULL,
	[vuelo] [varchar](10) NOT NULL,
	[cliente] [varchar](900) NOT NULL,
	[precio] [varchar](1000) NOT NULL,
	[cantidad] [varchar](500) NOT NULL,
 CONSTRAINT [PK_Boleto] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ClienteToken]    Script Date: 8/13/2022 6:13:03 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ClienteToken](
	[correo] [varchar](900) NOT NULL,
 CONSTRAINT [PK_ClienteToken] PRIMARY KEY CLUSTERED 
(
	[correo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ClienteWeb]    Script Date: 8/13/2022 6:13:03 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ClienteWeb](
	[usuario] [varchar](900) NOT NULL,
	[nombre] [varchar](1000) NOT NULL,
	[primer_apellido] [varchar](1000) NOT NULL,
	[segundo_apellido] [varchar](1000) NULL,
	[correo] [varchar](1000) NOT NULL,
	[contrasena] [varchar](1000) NOT NULL,
	[pregunta_seguridad] [decimal](2, 0) NOT NULL,
	[respuesta_seguridad] [varchar](1000) NOT NULL,
 CONSTRAINT [PK_ClienteWeb] PRIMARY KEY CLUSTERED 
(
	[usuario] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Consecutivo]    Script Date: 8/13/2022 6:13:03 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Consecutivo](
	[id] [decimal](8, 0) IDENTITY(1,1) NOT NULL,
	[valor] [varchar](1000) NOT NULL,
	[descripcion] [varchar](1000) NOT NULL,
	[prefijo] [varchar](1000) NULL,
	[rango_inicial] [varchar](1000) NULL,
	[rango_final] [varchar](1000) NULL,
 CONSTRAINT [PK_Consecutivo] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Error]    Script Date: 8/13/2022 6:13:03 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Error](
	[id] [decimal](2, 0) IDENTITY(1,1) NOT NULL,
	[fecha] [varchar](1000) NOT NULL,
	[hora] [varchar](1000) NOT NULL,
	[numero_error] [varchar](1000) NOT NULL,
	[mensaje_error] [varchar](1000) NOT NULL,
 CONSTRAINT [PK_Error] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[EstadoPuerta]    Script Date: 8/13/2022 6:13:03 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[EstadoPuerta](
	[id] [decimal](2, 0) IDENTITY(1,1) NOT NULL,
	[descripcion] [varchar](1000) NOT NULL,
 CONSTRAINT [PK_EstadoPuerta] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[EstadoVuelo]    Script Date: 8/13/2022 6:13:03 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[EstadoVuelo](
	[id] [decimal](2, 0) IDENTITY(1,1) NOT NULL,
	[descripcion] [varchar](1000) NOT NULL,
 CONSTRAINT [PK_EstadoVuelo] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[FormaPago]    Script Date: 8/13/2022 6:13:03 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FormaPago](
	[id] [decimal](2, 0) IDENTITY(1,1) NOT NULL,
	[descripcion] [varchar](1000) NOT NULL,
 CONSTRAINT [PK_FormaPago] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Operacion]    Script Date: 8/13/2022 6:13:03 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Operacion](
	[id] [decimal](2, 0) IDENTITY(1,1) NOT NULL,
	[descripcion] [varchar](900) NULL,
 CONSTRAINT [PK_Operacion] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Pais]    Script Date: 8/13/2022 6:13:03 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Pais](
	[id] [varchar](25) NOT NULL,
	[nombre] [varchar](1000) NOT NULL,
	[imagen] [varchar](max) NOT NULL,
 CONSTRAINT [PK_Pais] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Pregunta]    Script Date: 8/13/2022 6:13:03 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Pregunta](
	[id] [decimal](2, 0) IDENTITY(1,1) NOT NULL,
	[descripcion] [varchar](900) NULL,
 CONSTRAINT [PK_Pregunta] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Puerta]    Script Date: 8/13/2022 6:13:03 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Puerta](
	[id] [varchar](10) NOT NULL,
	[numero] [varchar](1000) NOT NULL,
	[estado] [decimal](2, 0) NOT NULL,
 CONSTRAINT [PK_Puerta] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Rol]    Script Date: 8/13/2022 6:13:03 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Rol](
	[id] [decimal](2, 0) IDENTITY(1,1) NOT NULL,
	[descripcion] [varchar](900) NOT NULL,
 CONSTRAINT [PK_Rol] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Tarjeta]    Script Date: 8/13/2022 6:13:03 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tarjeta](
	[numero_tarjeta] [varchar](900) NOT NULL,
	[anio_expiracion] [varchar](100) NOT NULL,
	[mes_expiracion] [varchar](100) NOT NULL,
	[tipo_tarjeta] [decimal](2, 0) NOT NULL,
	[cliente] [varchar](900) NOT NULL,
	[cvv] [varchar](900) NOT NULL,
 CONSTRAINT [PK_Tarjeta_1] PRIMARY KEY CLUSTERED 
(
	[numero_tarjeta] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TipoTarjeta]    Script Date: 8/13/2022 6:13:03 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TipoTarjeta](
	[id] [decimal](2, 0) IDENTITY(1,1) NOT NULL,
	[descripcion] [varchar](900) NULL,
 CONSTRAINT [PK_TipoTarjeta] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TipoTransaccion]    Script Date: 8/13/2022 6:13:03 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TipoTransaccion](
	[id] [decimal](2, 0) IDENTITY(1,1) NOT NULL,
	[descripcion] [varchar](1000) NOT NULL,
 CONSTRAINT [PK_TipoTransaccion] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Usuario]    Script Date: 8/13/2022 6:13:03 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Usuario](
	[usuario] [varchar](40) NOT NULL,
	[contrasena] [varchar](900) NOT NULL,
	[correo] [varchar](900) NOT NULL,
	[rol] [decimal](2, 0) NULL,
	[pregunta_seguridad] [decimal](2, 0) NOT NULL,
	[respuesta_seguridad] [varchar](900) NOT NULL,
 CONSTRAINT [PK_Usuario] PRIMARY KEY CLUSTERED 
(
	[usuario] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Vuelo]    Script Date: 8/13/2022 6:13:03 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Vuelo](
	[id] [varchar](10) NOT NULL,
	[fecha_partida] [varchar](1000) NOT NULL,
	[hora_partida] [varchar](1000) NOT NULL,
	[fecha_llegada] [varchar](1000) NOT NULL,
	[hora_llegada] [varchar](1000) NOT NULL,
	[aerolinea] [varchar](10) NOT NULL,
	[puerta] [varchar](10) NOT NULL,
	[estado] [decimal](2, 0) NOT NULL,
	[parte_de] [varchar](25) NOT NULL,
	[llega_a] [varchar](25) NOT NULL,
	[saliendo] [bit] NOT NULL,
 CONSTRAINT [PK_Vuelo] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Aerolinea]  WITH CHECK ADD  CONSTRAINT [FK_Aerolinea_Pais] FOREIGN KEY([pais])
REFERENCES [dbo].[Pais] ([id])
GO
ALTER TABLE [dbo].[Aerolinea] CHECK CONSTRAINT [FK_Aerolinea_Pais]
GO
ALTER TABLE [dbo].[Bitacora]  WITH CHECK ADD  CONSTRAINT [FK_Bitacora_Operacion] FOREIGN KEY([operacion])
REFERENCES [dbo].[Operacion] ([id])
GO
ALTER TABLE [dbo].[Bitacora] CHECK CONSTRAINT [FK_Bitacora_Operacion]
GO
ALTER TABLE [dbo].[Bitacora]  WITH CHECK ADD  CONSTRAINT [FK_Bitacora_Usuario] FOREIGN KEY([usuario])
REFERENCES [dbo].[Usuario] ([usuario])
GO
ALTER TABLE [dbo].[Bitacora] CHECK CONSTRAINT [FK_Bitacora_Usuario]
GO
ALTER TABLE [dbo].[Boleto]  WITH CHECK ADD  CONSTRAINT [FK_Boleto_ClienteToken] FOREIGN KEY([cliente])
REFERENCES [dbo].[ClienteToken] ([correo])
GO
ALTER TABLE [dbo].[Boleto] CHECK CONSTRAINT [FK_Boleto_ClienteToken]
GO
ALTER TABLE [dbo].[Boleto]  WITH CHECK ADD  CONSTRAINT [FK_Boleto_ClienteWeb] FOREIGN KEY([cliente])
REFERENCES [dbo].[ClienteWeb] ([usuario])
GO
ALTER TABLE [dbo].[Boleto] CHECK CONSTRAINT [FK_Boleto_ClienteWeb]
GO
ALTER TABLE [dbo].[Boleto]  WITH CHECK ADD  CONSTRAINT [FK_Boleto_FormaPago] FOREIGN KEY([forma_pago])
REFERENCES [dbo].[FormaPago] ([id])
GO
ALTER TABLE [dbo].[Boleto] CHECK CONSTRAINT [FK_Boleto_FormaPago]
GO
ALTER TABLE [dbo].[Boleto]  WITH CHECK ADD  CONSTRAINT [FK_Boleto_TipoTransaccion] FOREIGN KEY([tipo_transaccion])
REFERENCES [dbo].[TipoTransaccion] ([id])
GO
ALTER TABLE [dbo].[Boleto] CHECK CONSTRAINT [FK_Boleto_TipoTransaccion]
GO
ALTER TABLE [dbo].[Boleto]  WITH CHECK ADD  CONSTRAINT [FK_Boleto_Vuelo] FOREIGN KEY([vuelo])
REFERENCES [dbo].[Vuelo] ([id])
GO
ALTER TABLE [dbo].[Boleto] CHECK CONSTRAINT [FK_Boleto_Vuelo]
GO
ALTER TABLE [dbo].[ClienteWeb]  WITH CHECK ADD  CONSTRAINT [FK_ClienteWeb_Pregunta] FOREIGN KEY([pregunta_seguridad])
REFERENCES [dbo].[Pregunta] ([id])
GO
ALTER TABLE [dbo].[ClienteWeb] CHECK CONSTRAINT [FK_ClienteWeb_Pregunta]
GO
ALTER TABLE [dbo].[Puerta]  WITH CHECK ADD  CONSTRAINT [FK_Puerta_EstadoPuerta] FOREIGN KEY([estado])
REFERENCES [dbo].[EstadoPuerta] ([id])
GO
ALTER TABLE [dbo].[Puerta] CHECK CONSTRAINT [FK_Puerta_EstadoPuerta]
GO
ALTER TABLE [dbo].[Tarjeta]  WITH CHECK ADD  CONSTRAINT [FK_Tarjeta_ClienteToken] FOREIGN KEY([cliente])
REFERENCES [dbo].[ClienteToken] ([correo])
GO
ALTER TABLE [dbo].[Tarjeta] CHECK CONSTRAINT [FK_Tarjeta_ClienteToken]
GO
ALTER TABLE [dbo].[Tarjeta]  WITH CHECK ADD  CONSTRAINT [FK_Tarjeta_ClienteWeb] FOREIGN KEY([cliente])
REFERENCES [dbo].[ClienteWeb] ([usuario])
GO
ALTER TABLE [dbo].[Tarjeta] CHECK CONSTRAINT [FK_Tarjeta_ClienteWeb]
GO
ALTER TABLE [dbo].[Tarjeta]  WITH CHECK ADD  CONSTRAINT [FK_Tarjeta_TipoTarjeta] FOREIGN KEY([tipo_tarjeta])
REFERENCES [dbo].[TipoTarjeta] ([id])
GO
ALTER TABLE [dbo].[Tarjeta] CHECK CONSTRAINT [FK_Tarjeta_TipoTarjeta]
GO
ALTER TABLE [dbo].[Usuario]  WITH CHECK ADD  CONSTRAINT [FK_Usuario_Pregunta] FOREIGN KEY([pregunta_seguridad])
REFERENCES [dbo].[Pregunta] ([id])
GO
ALTER TABLE [dbo].[Usuario] CHECK CONSTRAINT [FK_Usuario_Pregunta]
GO
ALTER TABLE [dbo].[Usuario]  WITH CHECK ADD  CONSTRAINT [FK_Usuario_Rol] FOREIGN KEY([rol])
REFERENCES [dbo].[Rol] ([id])
GO
ALTER TABLE [dbo].[Usuario] CHECK CONSTRAINT [FK_Usuario_Rol]
GO
ALTER TABLE [dbo].[Vuelo]  WITH CHECK ADD  CONSTRAINT [FK_Vuelo_Aerolinea] FOREIGN KEY([aerolinea])
REFERENCES [dbo].[Aerolinea] ([id])
GO
ALTER TABLE [dbo].[Vuelo] CHECK CONSTRAINT [FK_Vuelo_Aerolinea]
GO
ALTER TABLE [dbo].[Vuelo]  WITH CHECK ADD  CONSTRAINT [FK_Vuelo_EstadoVuelo] FOREIGN KEY([estado])
REFERENCES [dbo].[EstadoVuelo] ([id])
GO
ALTER TABLE [dbo].[Vuelo] CHECK CONSTRAINT [FK_Vuelo_EstadoVuelo]
GO
ALTER TABLE [dbo].[Vuelo]  WITH CHECK ADD  CONSTRAINT [FK_Vuelo_Pais1] FOREIGN KEY([parte_de])
REFERENCES [dbo].[Pais] ([id])
GO
ALTER TABLE [dbo].[Vuelo] CHECK CONSTRAINT [FK_Vuelo_Pais1]
GO
ALTER TABLE [dbo].[Vuelo]  WITH CHECK ADD  CONSTRAINT [FK_Vuelo_Pais2] FOREIGN KEY([llega_a])
REFERENCES [dbo].[Pais] ([id])
GO
ALTER TABLE [dbo].[Vuelo] CHECK CONSTRAINT [FK_Vuelo_Pais2]
GO
ALTER TABLE [dbo].[Vuelo]  WITH CHECK ADD  CONSTRAINT [FK_Vuelo_Puerta] FOREIGN KEY([puerta])
REFERENCES [dbo].[Puerta] ([id])
GO
ALTER TABLE [dbo].[Vuelo] CHECK CONSTRAINT [FK_Vuelo_Puerta]
GO
/****** Object:  StoredProcedure [dbo].[uspBuscarVuelos]    Script Date: 8/13/2022 6:13:03 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE   PROCEDURE [dbo].[uspBuscarVuelos]
(
	@date date, 
	@pais varchar(15)
)
as
begin

	IF @date IS NOT NULL AND @pais IS NOT NULL
		SELECT 
			Vuelo.id, 
			fecha_partida,
			hora_partida,
			fecha_llegada,
			hora_llegada, 
			Vuelo.aerolinea AS codigo_aerolinea, 
			Aerolinea.nombre as nombre_aerolinea, 
			Vuelo.puerta AS codigo_puerta, 
			Puerta.numero as numero_puerta,
			Vuelo.estado AS codigo_estado,
			EstadoVuelo.descripcion as descripcion_estado,
			parte_de as codigo_pais_parte, 
			Pais.nombre as nombre_pais_parte,
			llega_a as codigo_pais_llega, 
			llegaA.nombre as nombre_pais_llega,
			saliendo
		FROM Vuelo
			LEFT OUTER JOIN Aerolinea ON Vuelo.aerolinea = Aerolinea.id
			LEFT OUTER JOIN Puerta ON Vuelo.Puerta = Puerta.id
			LEFT OUTER JOIN EstadoVuelo On Vuelo.estado = EstadoVuelo.id
			LEFT OUTER JOIN Pais ON Vuelo.parte_de = Pais.id
			LEFT OUTER JOIN Pais llegaA ON Vuelo.llega_a = llegaA.id
		WHERE @date = Vuelo.fecha_partida AND @pais = Vuelo.parte_de
	ELSE 
		IF @date IS NOT NULL
			SELECT 
				Vuelo.id, 
				fecha_partida,
				hora_partida,
				fecha_llegada,
				hora_llegada, 
				Vuelo.aerolinea AS codigo_aerolinea, 
				Aerolinea.nombre as nombre_aerolinea, 
				Vuelo.puerta AS codigo_puerta, 
				Puerta.numero as numero_puerta,
				Vuelo.estado AS codigo_estado,
				EstadoVuelo.descripcion as descripcion_estado,
				parte_de as codigo_pais_parte, 
				Pais.nombre as nombre_pais_parte,
				llega_a as codigo_pais_llega, 
				llegaA.nombre as nombre_pais_llega,
				saliendo
			FROM Vuelo
				LEFT OUTER JOIN Aerolinea ON Vuelo.aerolinea = Aerolinea.id
				LEFT OUTER JOIN Puerta ON Vuelo.Puerta = Puerta.id
				LEFT OUTER JOIN EstadoVuelo On Vuelo.estado = EstadoVuelo.id
				LEFT OUTER JOIN Pais ON Vuelo.parte_de = Pais.id
				LEFT OUTER JOIN Pais llegaA ON Vuelo.llega_a = llegaA.id
			WHERE @date = Vuelo.fecha_partida
		ELSE 
			SELECT 
				Vuelo.id, 
				fecha_partida,
				hora_partida,
				fecha_llegada,
				hora_llegada, 
				Vuelo.aerolinea AS codigo_aerolinea, 
				Aerolinea.nombre as nombre_aerolinea, 
				Vuelo.puerta AS codigo_puerta, 
				Puerta.numero as numero_puerta,
				Vuelo.estado AS codigo_estado,
				EstadoVuelo.descripcion as descripcion_estado,
				parte_de as codigo_pais_parte, 
				Pais.nombre as nombre_pais_parte,
				llega_a as codigo_pais_llega, 
				llegaA.nombre as nombre_pais_llega,
				saliendo
			FROM Vuelo
				LEFT OUTER JOIN Aerolinea ON Vuelo.aerolinea = Aerolinea.id
				LEFT OUTER JOIN Puerta ON Vuelo.Puerta = Puerta.id
				LEFT OUTER JOIN EstadoVuelo On Vuelo.estado = EstadoVuelo.id
				LEFT OUTER JOIN Pais ON Vuelo.parte_de = Pais.id
				LEFT OUTER JOIN Pais llegaA ON Vuelo.llega_a = llegaA.id
			WHERE @pais = Vuelo.parte_de
end
GO
/****** Object:  StoredProcedure [dbo].[uspCambiarContrasenaCliente]    Script Date: 8/13/2022 6:13:03 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE   PROCEDURE [dbo].[uspCambiarContrasenaCliente]
(
	@nombreUsuario varchar(20),
	@nuevaContrasena varchar(30)
)
as
begin
	UPDATE ClienteWeb SET
		contrasena = @nuevaContrasena
	WHERE usuario = @nombreUsuario
end
GO
/****** Object:  StoredProcedure [dbo].[uspCambiarContrasenaUsuario]    Script Date: 8/13/2022 6:13:03 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE   PROCEDURE [dbo].[uspCambiarContrasenaUsuario] 
(
	@nombreUsuario varchar(20),
	@nuevaContrasena varchar(30)
)
as
begin
	UPDATE Usuario SET
		contrasena = @nuevaContrasena
	WHERE usuario = @nombreUsuario
end

GO
/****** Object:  StoredProcedure [dbo].[uspRecuperarAerolineaPorPais]    Script Date: 8/13/2022 6:13:03 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE   PROCEDURE [dbo].[uspRecuperarAerolineaPorPais]
(
	@idPais varchar(15)
)
as
begin
	SELECT 
		Aerolinea.id,
		Aerolinea.nombre,
		Aerolinea.imagen, 
		Aerolinea.pais as CodigoPais,
		Pais.nombre as NombrePais
	FROM Aerolinea
	INNER JOIN Pais ON Aerolinea.pais = Pais.id
	WHERE Aerolinea.pais = @idPais
end

GO
/****** Object:  StoredProcedure [dbo].[uspRecuperarPuertasActivas]    Script Date: 8/13/2022 6:13:03 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE   PROCEDURE [dbo].[uspRecuperarPuertasActivas]
as
begin
	SELECT 
		Puerta.id, 
		numero,
		Puerta.estado as NumeroEstado,
		EstadoPuerta.descripcion as DescripcionEstado
	FROM Puerta
	INNER JOIN EstadoPuerta ON Puerta.estado = EstadoPuerta.id
	WHERE Puerta.estado = 1
end
GO
/****** Object:  StoredProcedure [dbo].[uspRecuperarVuelos]    Script Date: 8/13/2022 6:13:03 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE   PROCEDURE [dbo].[uspRecuperarVuelos]
as
begin
	SELECT 
		Vuelo.id, 
		fecha_partida,
		hora_partida,
		fecha_llegada,
		hora_llegada, 
		Vuelo.aerolinea AS codigo_aerolinea, 
		Aerolinea.nombre as nombre_aerolinea, 
		Vuelo.puerta AS codigo_puerta, 
		Puerta.numero as numero_puerta,
		Vuelo.estado AS codigo_estado,
		EstadoVuelo.descripcion as descripcion_estado,
		parte_de as codigo_pais_parte, 
		Pais.nombre as nombre_pais_parte,
		llega_a as codigo_pais_llega, 
		llegaA.nombre as nombre_pais_llega,
		saliendo
	FROM Vuelo
	LEFT OUTER JOIN Aerolinea ON Vuelo.aerolinea = Aerolinea.id
	LEFT OUTER JOIN Puerta ON Vuelo.Puerta = Puerta.id
	LEFT OUTER JOIN EstadoVuelo On Vuelo.estado = EstadoVuelo.id
	LEFT OUTER JOIN Pais ON Vuelo.parte_de = Pais.id
	LEFT OUTER JOIN Pais llegaA ON Vuelo.llega_a = llegaA.id
end
GO
/****** Object:  StoredProcedure [dbo].[uspRecuperarVuelos_EntranteSaliente]    Script Date: 8/13/2022 6:13:03 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE   PROCEDURE [dbo].[uspRecuperarVuelos_EntranteSaliente]
(
	@modo bit
)
as
begin
	SELECT 
		Vuelo.id, 
		fecha_partida,
		hora_partida,
		fecha_llegada,
		hora_llegada, 
		Vuelo.aerolinea AS codigo_aerolinea, 
		Aerolinea.nombre as nombre_aerolinea, 
		Vuelo.puerta AS codigo_puerta, 
		Puerta.numero as numero_puerta,
		Vuelo.estado AS codigo_estado,
		EstadoVuelo.descripcion as descripcion_estado,
		parte_de as codigo_pais_parte, 
		Pais.nombre as nombre_pais_parte,
		llega_a as codigo_pais_llega, 
		llegaA.nombre as nombre_pais_llega,
		saliendo
	FROM Vuelo
	LEFT OUTER JOIN Aerolinea ON Vuelo.aerolinea = Aerolinea.id
	LEFT OUTER JOIN Puerta ON Vuelo.Puerta = Puerta.id
	LEFT OUTER JOIN EstadoVuelo On Vuelo.estado = EstadoVuelo.id
	LEFT OUTER JOIN Pais ON Vuelo.parte_de = Pais.id
	LEFT OUTER JOIN Pais llegaA ON Vuelo.llega_a = llegaA.id
	WHERE Vuelo.saliendo = @modo;
end
GO
